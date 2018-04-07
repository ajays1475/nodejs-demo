import numeral from 'numeral';
import './index.css';
var cost = numeral(1000).format('$0,0:00');
console.log(`I would pay ${cost} for this course`); // eslint-disable-line no-console
