/**
 * Setup optional plugins.
 */

import jss from 'jss';
import nested from 'jss-nested';
import camelCase from 'jss-camel-case';
import defaultUnit from 'jss-default-unit';
import vendorPrefixer from 'jss-vendor-prefixer';

jss.use(
  nested(),
  camelCase(),
  defaultUnit(),
  vendorPrefixer()
);

export const global = {
  col: {
    width: '32%',
    margin: '1% 0% 1% 2%',
    float: 'left',
  },
}