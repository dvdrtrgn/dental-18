const NOM = 'API';
const W = window;
const C = console;

W._dbug = 'https:' == location.protocol ? 0 : 1;

// - - - - - - - - - - - - - - - - - -

C.debug(NOM, 'loaded @', W._dbug);

import $ from './jq-xtn';
import Flow from './flow';
import Stats from './ecg-stats';

const API = {
  NOM: NOM,
  $: $,
  W: W,
  C: C,
  flow: Flow,
  stats: Stats,
  stattoken: 'DENT-18', // string id for analytics
};

// - - - - - - - - - - - - - - - - - -

if (W._dbug < 2) {
  Stats.init(API.stattoken);
}

export default API;
