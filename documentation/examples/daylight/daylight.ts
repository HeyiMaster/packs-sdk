import * as coda from '../../../index';

// BEGIN
// **This import statement gives you access to all parts of the Coda Packs SDK. Uncomment to start!**
// import * as coda from '@codahq/packs-sdk';

// This line creates your new Pack.
export const pack = coda.newPack();

// When using the fetcher, this is the domain of the API that your pack makes fetcher requests to.
pack.addNetworkDomain('sunrise-sunset.org');

// Every object must have a schema, which defines things like the primary value that will be seen.
// If you think of an object as a row in a table, you can think of the schema as the columns.
// In this case, we're creating a new schema that has daylight hours, time of sunrise, and time of sunset.
const sunSchema = coda.makeObjectSchema({
  type: coda.ValueType.Object,
  properties: {
    // The values we return are simple strings, but we use the codaType field to
    // to tell Coda to interpret them as durations and time values.
    daylight: {type: coda.ValueType.String, codaType: coda.ValueHintType.Duration},
    sunriseUTC: {type: coda.ValueType.String, codaType: coda.ValueHintType.Time},
    sunsetUTC: {type: coda.ValueType.String, codaType: coda.ValueHintType.Time},
  },
  // This is the property to use for display purposes on the UI chip for this object.
  primary: 'daylight',
});

// This line adds a new formula.
pack.addFormula({
  // This is the name that will be called in the formula builder. Remember, your formula name cannot have spaces in it.
  name: 'Daylight',
  description: 'Returns an object with sunrise and sunset for a given latitude and longitude.',

  // This formula takes two required numeric inputs (the latitude and longitude) and one optional (the date)
  parameters: [
    coda.makeParameter({
      type: coda.ParameterType.Number,
      name: 'lat',
      description: 'The latitude to use.',
    }),
    coda.makeParameter({
      type: coda.ParameterType.Number,
      name: 'lng',
      description: 'The longitude to use.',
    }),
    coda.makeParameter({
      type: coda.ParameterType.Date,
      name: 'date',
      description: 'The date to use. Defaults to today.',

      // This date parameter is an optional input.
      optional: true,
    }),
  ],

  // Everything inside this execute statement will happen anytime your Coda function is called in a doc.
  // An array of all user inputs is passed as the 1st parameter.
  // The context object is always the 2nd parameter and is used for fetching data.
  execute: async function ([lat, lng, date], context) {
    // Default to today if no date is provided.
    const lookupDate = date ? new Date(date.toString()) : new Date();

    // Format date to yyyy-mm-dd format as required by this API.
    const formattedDate = lookupDate.toISOString().split('T')[0];

    const url = `https://api.sunrise-sunset.org/json?lat='${lat}'&lng=${lng}&date=${formattedDate}'`;

    const response = await context.fetcher.fetch({method: 'GET', url});

    // Re-format the day_length string to [h] hrs [m] mins [s] secs to work as a duration.
    const hours = response.body.results.day_length.split(':')[0];
    const mins = response.body.results.day_length.split(':')[1];
    const secs = response.body.results.day_length.split(':')[2];

    const daylight = `${hours}hrs${mins}mins${secs}secs`;

    // This API returns time in UTC so for simplicity we will just identify that in the output.
    return {
      daylight: daylight,
      sunriseUTC: response.body.results.sunrise,
      sunsetUTC: response.body.results.sunset,
    };
  },

  // In this formula, we're returning an object with multiple properties.
  resultType: coda.ValueType.Object,

  // This object will be defined according to the schema written above.
  schema: sunSchema,
});
