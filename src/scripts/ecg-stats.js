/*global ga, */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  CHANGED 2018-09-15
  IDEA    time page interactions
  NOTE    singleton checks or sends updates at interval (def:1.5s)
  TODO    integrate with beacon better

 */

import $ from 'jquery';
import _ from 'lodash';
import Beacon from './ecg-beacon';

var NOM = 'Stats';
var W = window;
var C = console;
// C.debug(NOM, 'loaded');

var API = {
  init: null,
  update: null,
  _: NOM,
  Beacon: Beacon,
};
var DF = {
  controls: 'a, button, .button, :submit, [tabindex]',
  key: 'ECG-Stats',
  thisAction: null,
  lastAction: null,
  time: 1.5,
  trig: $.jqns('click keyup', NOM),
};

// - - - - - - - - - - - - - - - - - -
// HELPERS (defaults dependancy only)

function _dump(msg) {
  C.info(NOM, '(dump)', DF.key, msg);
}

function _send(msg) {
  if (W.ga && msg) {
    ga(
      'send',
      'event', //         hit type
      DF.key, //          category
      msg, //             action, // [label], // [value],
      {
        nonInteraction: true,
      }, // EvtCf?
    );
  }
}

// - - - - - - - - - - - - - - - - - -
// PRIVATE (top dependancies only)

function _getActive() {
  // store once last interaction
  if (DF.thisAction !== DF.lastAction) {
    DF.lastAction = DF.thisAction;
    API.update();
  }
}

function _trim(str) {
  // avoid undefined replace + kill linebreaks & extra spaces
  str = (str || '').replace(/&nbsp;|\s+/gi, ' ');
  return $.trim(str.length > 1 ? str : '');
}

function _getString(me) {
  // make up element description
  var str = '';
  str = str || me.find(':header').text();
  str = str || me.attr('title');
  str = str || me.attr('aria-label');
  str = str || me.find('img').attr('alt');
  str = str || me.text();
  str = str || me.attr('href'); // very last resort
  return $.trim(_trim(str));
}

function _makeMessage(evt) {
  // describe event interaction
  evt.stopPropagation(); // only this element
  var me = $(evt.currentTarget);
  var msg = me.data('stat') || '';
  var str = _getString(me);
  var tag = me.prop('tagName').toLowerCase();
  var type = evt.type;

  if (!msg) {
    switch (tag) {
      case 'a':
      case 'button':
        msg = tag + ' ' + str;
        break;
      case 'input':
        msg = 'form ' + me.closest('form').serialize();
        break;
      default:
        msg = tag + ' ' + (str || me.parent().get(0).className);
    }
  }
  if (msg) {
    msg = type + ':' + msg;
  }
  return msg;
}

function _bindings() {
  DF.beacon = new Beacon(DF.time * 10, DF.key);

  $('body').on(DF.trig, DF.controls, function(evt) {
    if ($.isAffirmative(evt, DF.trig)) DF.thisAction = _makeMessage(evt);
  });
  W.setInterval(_getActive, DF.time * 100); // record last activity
}

// - - - - - - - - - - - - - - - - - -
// PUBLIC

function update(msg) {
  msg = msg || DF.lastAction;
  if (msg) (W.ga ? _send : _dump)(msg);
  DF.thisAction = undefined;
}

function init(key, sel) {
  if (W._dbug > -1) {
    C.debug('[[init]]', API);
  }
  DF.key = key || DF.key;
  DF.controls = sel || DF.controls;

  _bindings();
  return API;
}

// - - - - - - - - - - - - - - - - - -
// INIT

$.extend(API, {
  DF: DF,
  //
  init: _.once(init),
  update: _.debounce(update, DF.time * 1000),
});

export default API;
