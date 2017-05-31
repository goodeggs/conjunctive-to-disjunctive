// @flow

import flatMap from 'lodash.flatmap';

export default function conjunctiveToDisjunctive (objects: Array<Array<Object>>): Array<Object> {
  return objects.reduce((considerationsSoFar, newConsiderations) =>
    flatMap(considerationsSoFar, (consideration1) =>
      newConsiderations.map((consideration2) => Object.assign({}, consideration1, consideration2))
    )
  , [{}]);
}
