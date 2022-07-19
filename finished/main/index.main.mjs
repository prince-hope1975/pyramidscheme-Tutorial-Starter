// Automatically generated with Reach 0.1.10 (2604daf0)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (2604daf0)';
export const _backendVersion = 16;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Data({
    None: ctc2,
    Some: ctc1
    });
  const map0_ctc = ctc3;
  
  const map1_ctc = ctc4;
  
  const map2_ctc = ctc4;
  
  const map3_ctc = ctc3;
  
  const map4_ctc = ctc4;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      4: [ctc0, ctc1, ctc0, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc2, ctc4, ctc4, ctc2, ctc4]);
  return {
    mapDataTy: ctc5
    };
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Data({
    Schemers_checkBalance0_62: ctc5,
    Schemers_joinPyramid0_62: ctc6,
    Schemers_withdraw0_62: ctc5
    });
  const ctc8 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc4;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: false,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc4;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: false,
    ty: map4_ctc
    });
  
  
  const v378 = stdlib.protect(ctc3, interact.deadline, 'for Deployer\'s interact field deadline');
  const v379 = stdlib.protect(ctc3, interact.price, 'for Deployer\'s interact field price');
  
  const txn1 = await (ctc.sendrecv({
    args: [v379, v378],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:37:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:37:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v383, v384], secs: v386, time: v385, didSend: v29, from: v382 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v383, v384], secs: v386, time: v385, didSend: v29, from: v382 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v382, v383, v384, v385],
    evt_cnt: 0,
    funcNum: 1,
    lct: v385,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:39:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [], secs: v389, time: v388, didSend: v34, from: v387 } = txn2;
      
      ;
      const v397 = stdlib.add(v385, v384);
      
      await stdlib.simMapSet(sim_r, 0, v382, v382);
      await stdlib.simMapSet(sim_r, 3, v382, v382);
      await stdlib.simMapSet(sim_r, 4, v382, stdlib.checkedBigNumberify('./index.rsh:53:24:decimal', stdlib.UInt_max, '0'));
      const v401 = true;
      const v403 = v388;
      const v410 = stdlib.checkedBigNumberify('./index.rsh:29:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return v401;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v382,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc3, ctc3, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v389, time: v388, didSend: v34, from: v387 } = txn2;
  ;
  const v390 = stdlib.addressEq(v382, v387);
  stdlib.assert(v390, {
    at: './index.rsh:39:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v397 = stdlib.add(v385, v384);
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:43:19:application',
    fs: ['at ./index.rsh:43:19:application call to [unknown function] (defined at: ./index.rsh:43:19:function exp)', 'at ./index.rsh:43:19:application call to "liftedInteract" (defined at: ./index.rsh:43:19:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  await stdlib.mapSet(map0, v382, v382);
  await stdlib.mapSet(map3, v382, v382);
  await stdlib.mapSet(map4, v382, stdlib.checkedBigNumberify('./index.rsh:53:24:decimal', stdlib.UInt_max, '0'));
  let v401 = true;
  let v403 = v388;
  let v410 = stdlib.checkedBigNumberify('./index.rsh:29:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return v401;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc7],
      timeoutAt: ['time', v397],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc5],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v768], secs: v770, time: v769, didSend: v346, from: v767 } = txn4;
      undefined /* setApiDetails */;
      ;
      const v771 = true;
      await txn4.getOutput('Schemers_timesUp', 'v771', ctc8, v771);
      const cv401 = false;
      const cv403 = v769;
      const cv410 = v410;
      
      v401 = cv401;
      v403 = cv403;
      v410 = cv410;
      
      continue;
      }
    else {
      const {data: [v473], secs: v475, time: v474, didSend: v232, from: v472 } = txn3;
      switch (v473[0]) {
        case 'Schemers_checkBalance0_62': {
          const v476 = v473[1];
          undefined /* setApiDetails */;
          ;
          const v487 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v472), null);
          const v488 = stdlib.fromSome(v487, stdlib.checkedBigNumberify('./index.rsh:137:56:decimal', stdlib.UInt_max, '0'));
          await txn3.getOutput('Schemers_checkBalance', 'v488', ctc3, v488);
          const cv401 = true;
          const cv403 = v474;
          const cv410 = v410;
          
          v401 = cv401;
          v403 = cv403;
          v410 = cv410;
          
          continue;
          break;
          }
        case 'Schemers_joinPyramid0_62': {
          const v572 = v473[1];
          undefined /* setApiDetails */;
          const v581 = stdlib.add(v410, v383);
          ;
          const v592 = v572[stdlib.checkedBigNumberify('./index.rsh:119:9:spread', stdlib.UInt_max, '0')];
          await txn3.getOutput('Schemers_joinPyramid', 'v472', ctc1, v472);
          const v599 = stdlib.addressEq(v472, v382);
          const v600 = v599 ? false : true;
          stdlib.assert(v600, {
            at: './index.rsh:57:14:application',
            fs: ['at ./index.rsh:127:24:application call to "register" (defined at: ./index.rsh:56:34:function exp)', 'at ./index.rsh:125:14:application call to [unknown function] (defined at: ./index.rsh:125:14:function exp)'],
            msg: 'cannot register as deployer',
            who: 'Deployer'
            });
          const v601 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v472), null);
          const v602 = stdlib.fromSome(v601, v382);
          const v603 = stdlib.addressEq(v602, v472);
          const v604 = v603 ? false : true;
          stdlib.assert(v604, {
            at: './index.rsh:58:14:application',
            fs: ['at ./index.rsh:127:24:application call to "register" (defined at: ./index.rsh:56:34:function exp)', 'at ./index.rsh:125:14:application call to [unknown function] (defined at: ./index.rsh:125:14:function exp)'],
            msg: 'Already a member sorry',
            who: 'Deployer'
            });
          const v605 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v592), null);
          const v606 = stdlib.fromSome(v605, stdlib.checkedBigNumberify('./index.rsh:59:40:decimal', stdlib.UInt_max, '0'));
          const v607 = stdlib.lt(v606, stdlib.checkedBigNumberify('./index.rsh:59:45:decimal', stdlib.UInt_max, '2'));
          stdlib.assert(v607, {
            at: './index.rsh:59:14:application',
            fs: ['at ./index.rsh:127:24:application call to "register" (defined at: ./index.rsh:56:34:function exp)', 'at ./index.rsh:125:14:application call to [unknown function] (defined at: ./index.rsh:125:14:function exp)'],
            msg: 'No empty slots for that user',
            who: 'Deployer'
            });
          const v610 = stdlib.add(v606, stdlib.checkedBigNumberify('./index.rsh:62:58:decimal', stdlib.UInt_max, '1'));
          await stdlib.mapSet(map1, v592, v610);
          await stdlib.mapSet(map3, v472, v592);
          await stdlib.mapSet(map0, v472, v472);
          const v611 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v592), null);
          const v612 = stdlib.fromSome(v611, stdlib.checkedBigNumberify('./index.rsh:65:49:decimal', stdlib.UInt_max, '0'));
          const v613 = stdlib.add(v612, stdlib.checkedBigNumberify('./index.rsh:65:54:decimal', stdlib.UInt_max, '1'));
          await stdlib.mapSet(map2, v592, v613);
          await stdlib.mapSet(map4, v472, stdlib.checkedBigNumberify('./index.rsh:66:35:decimal', stdlib.UInt_max, '0'));
          const v614 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v592), null);
          const v615 = stdlib.fromSome(v614, stdlib.checkedBigNumberify('./index.rsh:67:61:decimal', stdlib.UInt_max, '0'));
          const v616 = stdlib.add(v615, v383);
          await stdlib.mapSet(map4, v592, v616);
          const cv401 = true;
          const cv403 = v474;
          const cv410 = v581;
          
          v401 = cv401;
          v403 = cv403;
          v410 = cv410;
          
          continue;
          break;
          }
        case 'Schemers_withdraw0_62': {
          const v668 = v473[1];
          undefined /* setApiDetails */;
          ;
          const v718 = stdlib.addressEq(v472, v382);
          const v719 = v718 ? false : true;
          stdlib.assert(v719, {
            at: './index.rsh:81:14:application',
            fs: ['at ./index.rsh:150:30:application call to "withdrawPayout" (defined at: ./index.rsh:80:40:function exp)', 'at ./index.rsh:148:11:application call to [unknown function] (defined at: ./index.rsh:148:11:function exp)'],
            msg: 'You have no uplines',
            who: 'Deployer'
            });
          const v720 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v472), null);
          const v721 = stdlib.fromSome(v720, stdlib.checkedBigNumberify('./index.rsh:83:45:decimal', stdlib.UInt_max, '0'));
          const v722 = stdlib.eq(v721, stdlib.checkedBigNumberify('./index.rsh:83:51:decimal', stdlib.UInt_max, '0'));
          const v723 = v722 ? false : true;
          stdlib.assert(v723, {
            at: './index.rsh:82:14:application',
            fs: ['at ./index.rsh:150:30:application call to "withdrawPayout" (defined at: ./index.rsh:80:40:function exp)', 'at ./index.rsh:148:11:application call to [unknown function] (defined at: ./index.rsh:148:11:function exp)'],
            msg: 'Insufficient Balance',
            who: 'Deployer'
            });
          const v724 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v472), null);
          const v725 = stdlib.fromSome(v724, v382);
          const v726 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v725), null);
          const v727 = stdlib.fromSome(v726, stdlib.checkedBigNumberify('./index.rsh:89:63:decimal', stdlib.UInt_max, '0'));
          const v728 = stdlib.ge(v727, stdlib.checkedBigNumberify('./index.rsh:89:69:decimal', stdlib.UInt_max, '2'));
          stdlib.assert(v728, {
            at: './index.rsh:88:14:application',
            fs: ['at ./index.rsh:150:30:application call to "withdrawPayout" (defined at: ./index.rsh:80:40:function exp)', 'at ./index.rsh:148:11:application call to [unknown function] (defined at: ./index.rsh:148:11:function exp)'],
            msg: 'Need at least two down lines',
            who: 'Deployer'
            });
          const v730 = stdlib.gt(v410, v383);
          stdlib.assert(v730, {
            at: './index.rsh:92:14:application',
            fs: ['at ./index.rsh:150:30:application call to "withdrawPayout" (defined at: ./index.rsh:80:40:function exp)', 'at ./index.rsh:148:11:application call to [unknown function] (defined at: ./index.rsh:148:11:function exp)'],
            msg: null,
            who: 'Deployer'
            });
          let v732;
          switch (v720[0]) {
            case 'None': {
              const v733 = v720[1];
              v732 = stdlib.checkedBigNumberify('./index.rsh:96:19:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v734 = v720[1];
              const v735 = stdlib.mul(v734, stdlib.checkedBigNumberify('./index.rsh:97:25:decimal', stdlib.UInt_max, '30'));
              const v736 = stdlib.div(v735, stdlib.checkedBigNumberify('./index.rsh:97:31:decimal', stdlib.UInt_max, '100'));
              v732 = v736;
              
              break;
              }
            }
          const v738 = stdlib.gt(v410, v732);
          const v739 = v738 ? v732 : v410;
          const v741 = stdlib.ge(v410, v739);
          stdlib.assert(v741, {
            at: './index.rsh:100:16:application',
            fs: ['at ./index.rsh:150:39:application call to [unknown function] (defined at: ./index.rsh:93:19:function exp)', 'at ./index.rsh:148:11:application call to [unknown function] (defined at: ./index.rsh:148:11:function exp)'],
            msg: 'Balance Empty',
            who: 'Deployer'
            });
          await txn3.getOutput('Schemers_withdraw', 'v739', ctc3, v739);
          const v750 = stdlib.sub(v410, v739);
          ;
          const v755 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v725), null);
          const v756 = stdlib.fromSome(v755, stdlib.checkedBigNumberify('./index.rsh:106:69:decimal', stdlib.UInt_max, '0'));
          const v757 = stdlib.mul(v739, stdlib.checkedBigNumberify('./index.rsh:107:22:decimal', stdlib.UInt_max, '2'));
          const v758 = stdlib.add(v756, v757);
          await stdlib.mapSet(map4, v725, v758);
          await stdlib.mapSet(map4, v472, stdlib.checkedBigNumberify('./index.rsh:108:35:decimal', stdlib.UInt_max, '0'));
          const v759 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v387), null);
          const v760 = stdlib.fromSome(v759, stdlib.checkedBigNumberify('./index.rsh:109:61:decimal', stdlib.UInt_max, '0'));
          await stdlib.mapSet(map4, v387, v760);
          const cv401 = true;
          const cv403 = v474;
          const cv410 = v750;
          
          v401 = cv401;
          v403 = cv403;
          v410 = cv410;
          
          continue;
          break;
          }
        }}
    
    }
  ;
  return;
  
  
  
  
  };
export async function _Schemers_checkBalance4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Schemers_checkBalance4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Schemers_checkBalance4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Data({
    Schemers_checkBalance0_62: ctc5,
    Schemers_joinPyramid0_62: ctc6,
    Schemers_withdraw0_62: ctc5
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc4;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc4;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  
  const [v382, v383, v387, v397, v410] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc3, ctc1, ctc3, ctc3]);
  const v433 = ctc.selfAddress();
  const v435 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:132:10:application call to [unknown function] (defined at: ./index.rsh:132:10:function exp)', 'at ./index.rsh:54:53:application call to "runSchemers_checkBalance0_62" (defined at: ./index.rsh:130:9:function exp)', 'at ./index.rsh:54:53:application call to [unknown function] (defined at: ./index.rsh:54:53:function exp)'],
    msg: 'in',
    who: 'Schemers_checkBalance'
    });
  const v437 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v433), null);
  const v438 = stdlib.fromSome(v437, v382);
  const v439 = stdlib.addressEq(v438, v382);
  const v440 = v439 ? false : true;
  stdlib.assert(v440, {
    at: './index.rsh:73:14:application',
    fs: ['at ./index.rsh:133:30:application call to "userBalance" (defined at: ./index.rsh:72:34:function exp)', 'at ./index.rsh:132:10:application call to [unknown function] (defined at: ./index.rsh:132:10:function exp)', 'at ./index.rsh:132:10:application call to [unknown function] (defined at: ./index.rsh:132:10:function exp)', 'at ./index.rsh:54:53:application call to "runSchemers_checkBalance0_62" (defined at: ./index.rsh:130:9:function exp)', 'at ./index.rsh:54:53:application call to [unknown function] (defined at: ./index.rsh:54:53:function exp)'],
    msg: 'Not a member',
    who: 'Schemers_checkBalance'
    });
  const v441 = stdlib.addressEq(v433, v382);
  const v442 = v441 ? false : true;
  stdlib.assert(v442, {
    at: './index.rsh:75:14:application',
    fs: ['at ./index.rsh:133:30:application call to "userBalance" (defined at: ./index.rsh:72:34:function exp)', 'at ./index.rsh:132:10:application call to [unknown function] (defined at: ./index.rsh:132:10:function exp)', 'at ./index.rsh:132:10:application call to [unknown function] (defined at: ./index.rsh:132:10:function exp)', 'at ./index.rsh:54:53:application call to "runSchemers_checkBalance0_62" (defined at: ./index.rsh:130:9:function exp)', 'at ./index.rsh:54:53:application call to [unknown function] (defined at: ./index.rsh:54:53:function exp)'],
    msg: 'Unable to check balance',
    who: 'Schemers_checkBalance'
    });
  const v445 = ['Schemers_checkBalance0_62', v435];
  
  const txn1 = await (ctc.sendrecv({
    args: [v382, v383, v387, v397, v410, v445],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:135:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v473], secs: v475, time: v474, didSend: v232, from: v472 } = txn1;
      
      switch (v473[0]) {
        case 'Schemers_checkBalance0_62': {
          const v476 = v473[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Schemers_checkBalance"
            });
          ;
          const v487 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v472), null);
          const v488 = stdlib.fromSome(v487, stdlib.checkedBigNumberify('./index.rsh:137:56:decimal', stdlib.UInt_max, '0'));
          const v489 = await txn1.getOutput('Schemers_checkBalance', 'v488', ctc3, v488);
          
          const v1218 = v410;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Schemers_joinPyramid0_62': {
          const v572 = v473[1];
          
          break;
          }
        case 'Schemers_withdraw0_62': {
          const v668 = v473[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc3, ctc1, ctc3, ctc3, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v473], secs: v475, time: v474, didSend: v232, from: v472 } = txn1;
  switch (v473[0]) {
    case 'Schemers_checkBalance0_62': {
      const v476 = v473[1];
      undefined /* setApiDetails */;
      ;
      const v487 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v472), null);
      const v488 = stdlib.fromSome(v487, stdlib.checkedBigNumberify('./index.rsh:137:56:decimal', stdlib.UInt_max, '0'));
      const v489 = await txn1.getOutput('Schemers_checkBalance', 'v488', ctc3, v488);
      if (v232) {
        stdlib.protect(ctc0, await interact.out(v476, v489), {
          at: './index.rsh:131:7:application',
          fs: ['at ./index.rsh:131:7:application call to [unknown function] (defined at: ./index.rsh:131:7:function exp)', 'at ./index.rsh:138:10:application call to "k" (defined at: ./index.rsh:136:11:function exp)', 'at ./index.rsh:136:11:application call to [unknown function] (defined at: ./index.rsh:136:11:function exp)'],
          msg: 'out',
          who: 'Schemers_checkBalance'
          });
        }
      else {
        }
      
      const v1218 = v410;
      return;
      
      break;
      }
    case 'Schemers_joinPyramid0_62': {
      const v572 = v473[1];
      return;
      break;
      }
    case 'Schemers_withdraw0_62': {
      const v668 = v473[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Schemers_joinPyramid4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Schemers_joinPyramid4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Schemers_joinPyramid4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc1]);
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Data({
    Schemers_checkBalance0_62: ctc6,
    Schemers_joinPyramid0_62: ctc5,
    Schemers_withdraw0_62: ctc6
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc4;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc4;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  
  const [v382, v383, v387, v397, v410] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc3, ctc1, ctc3, ctc3]);
  const v413 = ctc.selfAddress();
  const v415 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:121:11:application call to [unknown function] (defined at: ./index.rsh:121:11:function exp)', 'at ./index.rsh:54:53:application call to "runSchemers_joinPyramid0_62" (defined at: ./index.rsh:119:9:function exp)', 'at ./index.rsh:54:53:application call to [unknown function] (defined at: ./index.rsh:54:53:function exp)'],
    msg: 'in',
    who: 'Schemers_joinPyramid'
    });
  const v416 = v415[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v419 = stdlib.addressEq(v413, v382);
  const v420 = v419 ? false : true;
  stdlib.assert(v420, {
    at: './index.rsh:57:14:application',
    fs: ['at ./index.rsh:122:27:application call to "register" (defined at: ./index.rsh:56:34:function exp)', 'at ./index.rsh:121:11:application call to [unknown function] (defined at: ./index.rsh:121:11:function exp)', 'at ./index.rsh:121:11:application call to [unknown function] (defined at: ./index.rsh:121:11:function exp)', 'at ./index.rsh:54:53:application call to "runSchemers_joinPyramid0_62" (defined at: ./index.rsh:119:9:function exp)', 'at ./index.rsh:54:53:application call to [unknown function] (defined at: ./index.rsh:54:53:function exp)'],
    msg: 'cannot register as deployer',
    who: 'Schemers_joinPyramid'
    });
  const v421 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v413), null);
  const v422 = stdlib.fromSome(v421, v382);
  const v423 = stdlib.addressEq(v422, v413);
  const v424 = v423 ? false : true;
  stdlib.assert(v424, {
    at: './index.rsh:58:14:application',
    fs: ['at ./index.rsh:122:27:application call to "register" (defined at: ./index.rsh:56:34:function exp)', 'at ./index.rsh:121:11:application call to [unknown function] (defined at: ./index.rsh:121:11:function exp)', 'at ./index.rsh:121:11:application call to [unknown function] (defined at: ./index.rsh:121:11:function exp)', 'at ./index.rsh:54:53:application call to "runSchemers_joinPyramid0_62" (defined at: ./index.rsh:119:9:function exp)', 'at ./index.rsh:54:53:application call to [unknown function] (defined at: ./index.rsh:54:53:function exp)'],
    msg: 'Already a member sorry',
    who: 'Schemers_joinPyramid'
    });
  const v425 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v416), null);
  const v426 = stdlib.fromSome(v425, stdlib.checkedBigNumberify('./index.rsh:59:40:decimal', stdlib.UInt_max, '0'));
  const v427 = stdlib.lt(v426, stdlib.checkedBigNumberify('./index.rsh:59:45:decimal', stdlib.UInt_max, '2'));
  stdlib.assert(v427, {
    at: './index.rsh:59:14:application',
    fs: ['at ./index.rsh:122:27:application call to "register" (defined at: ./index.rsh:56:34:function exp)', 'at ./index.rsh:121:11:application call to [unknown function] (defined at: ./index.rsh:121:11:function exp)', 'at ./index.rsh:121:11:application call to [unknown function] (defined at: ./index.rsh:121:11:function exp)', 'at ./index.rsh:54:53:application call to "runSchemers_joinPyramid0_62" (defined at: ./index.rsh:119:9:function exp)', 'at ./index.rsh:54:53:application call to [unknown function] (defined at: ./index.rsh:54:53:function exp)'],
    msg: 'No empty slots for that user',
    who: 'Schemers_joinPyramid'
    });
  const v431 = ['Schemers_joinPyramid0_62', v415];
  
  const txn1 = await (ctc.sendrecv({
    args: [v382, v383, v387, v397, v410, v431],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [v383, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v473], secs: v475, time: v474, didSend: v232, from: v472 } = txn1;
      
      switch (v473[0]) {
        case 'Schemers_checkBalance0_62': {
          const v476 = v473[1];
          
          break;
          }
        case 'Schemers_joinPyramid0_62': {
          const v572 = v473[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Schemers_joinPyramid"
            });
          const v581 = stdlib.add(v410, v383);
          sim_r.txns.push({
            amt: v383,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v592 = v572[stdlib.checkedBigNumberify('./index.rsh:119:9:spread', stdlib.UInt_max, '0')];
          const v593 = await txn1.getOutput('Schemers_joinPyramid', 'v472', ctc1, v472);
          
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v472), null);
          const v605 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v592), null);
          const v606 = stdlib.fromSome(v605, stdlib.checkedBigNumberify('./index.rsh:59:40:decimal', stdlib.UInt_max, '0'));
          const v610 = stdlib.add(v606, stdlib.checkedBigNumberify('./index.rsh:62:58:decimal', stdlib.UInt_max, '1'));
          await stdlib.simMapSet(sim_r, 1, v592, v610);
          await stdlib.simMapSet(sim_r, 3, v472, v592);
          await stdlib.simMapSet(sim_r, 0, v472, v472);
          const v611 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v592), null);
          const v612 = stdlib.fromSome(v611, stdlib.checkedBigNumberify('./index.rsh:65:49:decimal', stdlib.UInt_max, '0'));
          const v613 = stdlib.add(v612, stdlib.checkedBigNumberify('./index.rsh:65:54:decimal', stdlib.UInt_max, '1'));
          await stdlib.simMapSet(sim_r, 2, v592, v613);
          await stdlib.simMapSet(sim_r, 4, v472, stdlib.checkedBigNumberify('./index.rsh:66:35:decimal', stdlib.UInt_max, '0'));
          const v614 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v592), null);
          const v615 = stdlib.fromSome(v614, stdlib.checkedBigNumberify('./index.rsh:67:61:decimal', stdlib.UInt_max, '0'));
          const v616 = stdlib.add(v615, v383);
          await stdlib.simMapSet(sim_r, 4, v592, v616);
          const v1230 = v581;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Schemers_withdraw0_62': {
          const v668 = v473[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc3, ctc1, ctc3, ctc3, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v473], secs: v475, time: v474, didSend: v232, from: v472 } = txn1;
  switch (v473[0]) {
    case 'Schemers_checkBalance0_62': {
      const v476 = v473[1];
      return;
      break;
      }
    case 'Schemers_joinPyramid0_62': {
      const v572 = v473[1];
      undefined /* setApiDetails */;
      const v581 = stdlib.add(v410, v383);
      ;
      const v592 = v572[stdlib.checkedBigNumberify('./index.rsh:119:9:spread', stdlib.UInt_max, '0')];
      const v593 = await txn1.getOutput('Schemers_joinPyramid', 'v472', ctc1, v472);
      if (v232) {
        stdlib.protect(ctc0, await interact.out(v572, v593), {
          at: './index.rsh:120:7:application',
          fs: ['at ./index.rsh:120:7:application call to [unknown function] (defined at: ./index.rsh:120:7:function exp)', 'at ./index.rsh:126:10:application call to "k" (defined at: ./index.rsh:125:14:function exp)', 'at ./index.rsh:125:14:application call to [unknown function] (defined at: ./index.rsh:125:14:function exp)'],
          msg: 'out',
          who: 'Schemers_joinPyramid'
          });
        }
      else {
        }
      
      const v599 = stdlib.addressEq(v472, v382);
      const v600 = v599 ? false : true;
      stdlib.assert(v600, {
        at: './index.rsh:57:14:application',
        fs: ['at ./index.rsh:127:24:application call to "register" (defined at: ./index.rsh:56:34:function exp)', 'at ./index.rsh:125:14:application call to [unknown function] (defined at: ./index.rsh:125:14:function exp)'],
        msg: 'cannot register as deployer',
        who: 'Schemers_joinPyramid'
        });
      const v601 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v472), null);
      const v602 = stdlib.fromSome(v601, v382);
      const v603 = stdlib.addressEq(v602, v472);
      const v604 = v603 ? false : true;
      stdlib.assert(v604, {
        at: './index.rsh:58:14:application',
        fs: ['at ./index.rsh:127:24:application call to "register" (defined at: ./index.rsh:56:34:function exp)', 'at ./index.rsh:125:14:application call to [unknown function] (defined at: ./index.rsh:125:14:function exp)'],
        msg: 'Already a member sorry',
        who: 'Schemers_joinPyramid'
        });
      const v605 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v592), null);
      const v606 = stdlib.fromSome(v605, stdlib.checkedBigNumberify('./index.rsh:59:40:decimal', stdlib.UInt_max, '0'));
      const v607 = stdlib.lt(v606, stdlib.checkedBigNumberify('./index.rsh:59:45:decimal', stdlib.UInt_max, '2'));
      stdlib.assert(v607, {
        at: './index.rsh:59:14:application',
        fs: ['at ./index.rsh:127:24:application call to "register" (defined at: ./index.rsh:56:34:function exp)', 'at ./index.rsh:125:14:application call to [unknown function] (defined at: ./index.rsh:125:14:function exp)'],
        msg: 'No empty slots for that user',
        who: 'Schemers_joinPyramid'
        });
      const v610 = stdlib.add(v606, stdlib.checkedBigNumberify('./index.rsh:62:58:decimal', stdlib.UInt_max, '1'));
      await stdlib.mapSet(map1, v592, v610);
      await stdlib.mapSet(map3, v472, v592);
      await stdlib.mapSet(map0, v472, v472);
      const v611 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v592), null);
      const v612 = stdlib.fromSome(v611, stdlib.checkedBigNumberify('./index.rsh:65:49:decimal', stdlib.UInt_max, '0'));
      const v613 = stdlib.add(v612, stdlib.checkedBigNumberify('./index.rsh:65:54:decimal', stdlib.UInt_max, '1'));
      await stdlib.mapSet(map2, v592, v613);
      await stdlib.mapSet(map4, v472, stdlib.checkedBigNumberify('./index.rsh:66:35:decimal', stdlib.UInt_max, '0'));
      const v614 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v592), null);
      const v615 = stdlib.fromSome(v614, stdlib.checkedBigNumberify('./index.rsh:67:61:decimal', stdlib.UInt_max, '0'));
      const v616 = stdlib.add(v615, v383);
      await stdlib.mapSet(map4, v592, v616);
      const v1230 = v581;
      return;
      
      break;
      }
    case 'Schemers_withdraw0_62': {
      const v668 = v473[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Schemers_timesUp4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Schemers_timesUp4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Schemers_timesUp4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc4;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc4;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  
  const [v382, v383, v387, v397, v410] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc3, ctc1, ctc3, ctc3]);
  const v766 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:154:7:application',
    fs: ['at ./index.rsh:154:7:application call to [unknown function] (defined at: ./index.rsh:154:7:function exp)', 'at ./index.rsh:153:32:application call to [unknown function] (defined at: ./index.rsh:153:32:function exp)'],
    msg: 'in',
    who: 'Schemers_timesUp'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v382, v383, v387, v397, v410, v766],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:154:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v768], secs: v770, time: v769, didSend: v346, from: v767 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Schemers_timesUp"
        });
      ;
      const v771 = true;
      const v772 = await txn1.getOutput('Schemers_timesUp', 'v771', ctc6, v771);
      
      sim_r.txns.push({
        kind: 'from',
        to: v382,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc3, ctc1, ctc3, ctc3, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v768], secs: v770, time: v769, didSend: v346, from: v767 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v771 = true;
  const v772 = await txn1.getOutput('Schemers_timesUp', 'v771', ctc6, v771);
  stdlib.protect(ctc0, await interact.out(v768, v772), {
    at: './index.rsh:154:7:application',
    fs: ['at ./index.rsh:154:7:application call to [unknown function] (defined at: ./index.rsh:154:7:function exp)', 'at ./index.rsh:155:8:application call to "k" (defined at: ./index.rsh:154:7:function exp)', 'at ./index.rsh:153:32:application call to [unknown function] (defined at: ./index.rsh:153:32:function exp)'],
    msg: 'out',
    who: 'Schemers_timesUp'
    });
  
  ;
  return;
  
  
  
  };
export async function _Schemers_withdraw4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Schemers_withdraw4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Schemers_withdraw4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Data({
    Schemers_checkBalance0_62: ctc5,
    Schemers_joinPyramid0_62: ctc6,
    Schemers_withdraw0_62: ctc5
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc4;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc4;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  
  const [v382, v383, v387, v397, v410] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc3, ctc1, ctc3, ctc3]);
  const v447 = ctc.selfAddress();
  const v449 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:144:10:application call to [unknown function] (defined at: ./index.rsh:144:10:function exp)', 'at ./index.rsh:54:53:application call to "runSchemers_withdraw0_62" (defined at: ./index.rsh:142:9:function exp)', 'at ./index.rsh:54:53:application call to [unknown function] (defined at: ./index.rsh:54:53:function exp)'],
    msg: 'in',
    who: 'Schemers_withdraw'
    });
  const v451 = stdlib.addressEq(v447, v382);
  const v452 = v451 ? false : true;
  stdlib.assert(v452, {
    at: './index.rsh:81:14:application',
    fs: ['at ./index.rsh:145:33:application call to "withdrawPayout" (defined at: ./index.rsh:80:40:function exp)', 'at ./index.rsh:144:10:application call to [unknown function] (defined at: ./index.rsh:144:10:function exp)', 'at ./index.rsh:144:10:application call to [unknown function] (defined at: ./index.rsh:144:10:function exp)', 'at ./index.rsh:54:53:application call to "runSchemers_withdraw0_62" (defined at: ./index.rsh:142:9:function exp)', 'at ./index.rsh:54:53:application call to [unknown function] (defined at: ./index.rsh:54:53:function exp)'],
    msg: 'You have no uplines',
    who: 'Schemers_withdraw'
    });
  const v453 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v447), null);
  const v454 = stdlib.fromSome(v453, stdlib.checkedBigNumberify('./index.rsh:83:45:decimal', stdlib.UInt_max, '0'));
  const v455 = stdlib.eq(v454, stdlib.checkedBigNumberify('./index.rsh:83:51:decimal', stdlib.UInt_max, '0'));
  const v456 = v455 ? false : true;
  stdlib.assert(v456, {
    at: './index.rsh:82:14:application',
    fs: ['at ./index.rsh:145:33:application call to "withdrawPayout" (defined at: ./index.rsh:80:40:function exp)', 'at ./index.rsh:144:10:application call to [unknown function] (defined at: ./index.rsh:144:10:function exp)', 'at ./index.rsh:144:10:application call to [unknown function] (defined at: ./index.rsh:144:10:function exp)', 'at ./index.rsh:54:53:application call to "runSchemers_withdraw0_62" (defined at: ./index.rsh:142:9:function exp)', 'at ./index.rsh:54:53:application call to [unknown function] (defined at: ./index.rsh:54:53:function exp)'],
    msg: 'Insufficient Balance',
    who: 'Schemers_withdraw'
    });
  const v457 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v447), null);
  const v458 = stdlib.fromSome(v457, v382);
  const v459 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v458), null);
  const v460 = stdlib.fromSome(v459, stdlib.checkedBigNumberify('./index.rsh:89:63:decimal', stdlib.UInt_max, '0'));
  const v461 = stdlib.ge(v460, stdlib.checkedBigNumberify('./index.rsh:89:69:decimal', stdlib.UInt_max, '2'));
  stdlib.assert(v461, {
    at: './index.rsh:88:14:application',
    fs: ['at ./index.rsh:145:33:application call to "withdrawPayout" (defined at: ./index.rsh:80:40:function exp)', 'at ./index.rsh:144:10:application call to [unknown function] (defined at: ./index.rsh:144:10:function exp)', 'at ./index.rsh:144:10:application call to [unknown function] (defined at: ./index.rsh:144:10:function exp)', 'at ./index.rsh:54:53:application call to "runSchemers_withdraw0_62" (defined at: ./index.rsh:142:9:function exp)', 'at ./index.rsh:54:53:application call to [unknown function] (defined at: ./index.rsh:54:53:function exp)'],
    msg: 'Need at least two down lines',
    who: 'Schemers_withdraw'
    });
  const v463 = stdlib.gt(v410, v383);
  stdlib.assert(v463, {
    at: './index.rsh:92:14:application',
    fs: ['at ./index.rsh:145:33:application call to "withdrawPayout" (defined at: ./index.rsh:80:40:function exp)', 'at ./index.rsh:144:10:application call to [unknown function] (defined at: ./index.rsh:144:10:function exp)', 'at ./index.rsh:144:10:application call to [unknown function] (defined at: ./index.rsh:144:10:function exp)', 'at ./index.rsh:54:53:application call to "runSchemers_withdraw0_62" (defined at: ./index.rsh:142:9:function exp)', 'at ./index.rsh:54:53:application call to [unknown function] (defined at: ./index.rsh:54:53:function exp)'],
    msg: null,
    who: 'Schemers_withdraw'
    });
  const v466 = ['Schemers_withdraw0_62', v449];
  
  const txn1 = await (ctc.sendrecv({
    args: [v382, v383, v387, v397, v410, v466],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:147:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v473], secs: v475, time: v474, didSend: v232, from: v472 } = txn1;
      
      switch (v473[0]) {
        case 'Schemers_checkBalance0_62': {
          const v476 = v473[1];
          
          break;
          }
        case 'Schemers_joinPyramid0_62': {
          const v572 = v473[1];
          
          break;
          }
        case 'Schemers_withdraw0_62': {
          const v668 = v473[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Schemers_withdraw"
            });
          ;
          const v720 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v472), null);
          const v724 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v472), null);
          const v725 = stdlib.fromSome(v724, v382);
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v725), null);
          let v732;
          switch (v720[0]) {
            case 'None': {
              const v733 = v720[1];
              v732 = stdlib.checkedBigNumberify('./index.rsh:96:19:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v734 = v720[1];
              const v735 = stdlib.mul(v734, stdlib.checkedBigNumberify('./index.rsh:97:25:decimal', stdlib.UInt_max, '30'));
              const v736 = stdlib.div(v735, stdlib.checkedBigNumberify('./index.rsh:97:31:decimal', stdlib.UInt_max, '100'));
              v732 = v736;
              
              break;
              }
            }
          const v738 = stdlib.gt(v410, v732);
          const v739 = v738 ? v732 : v410;
          const v742 = await txn1.getOutput('Schemers_withdraw', 'v739', ctc3, v739);
          
          const v750 = stdlib.sub(v410, v739);
          sim_r.txns.push({
            kind: 'from',
            to: v472,
            tok: undefined /* Nothing */
            });
          const v755 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v725), null);
          const v756 = stdlib.fromSome(v755, stdlib.checkedBigNumberify('./index.rsh:106:69:decimal', stdlib.UInt_max, '0'));
          const v757 = stdlib.mul(v739, stdlib.checkedBigNumberify('./index.rsh:107:22:decimal', stdlib.UInt_max, '2'));
          const v758 = stdlib.add(v756, v757);
          await stdlib.simMapSet(sim_r, 4, v725, v758);
          await stdlib.simMapSet(sim_r, 4, v472, stdlib.checkedBigNumberify('./index.rsh:108:35:decimal', stdlib.UInt_max, '0'));
          const v759 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v387), null);
          const v760 = stdlib.fromSome(v759, stdlib.checkedBigNumberify('./index.rsh:109:61:decimal', stdlib.UInt_max, '0'));
          await stdlib.simMapSet(sim_r, 4, v387, v760);
          const v1245 = v750;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc3, ctc1, ctc3, ctc3, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v473], secs: v475, time: v474, didSend: v232, from: v472 } = txn1;
  switch (v473[0]) {
    case 'Schemers_checkBalance0_62': {
      const v476 = v473[1];
      return;
      break;
      }
    case 'Schemers_joinPyramid0_62': {
      const v572 = v473[1];
      return;
      break;
      }
    case 'Schemers_withdraw0_62': {
      const v668 = v473[1];
      undefined /* setApiDetails */;
      ;
      const v718 = stdlib.addressEq(v472, v382);
      const v719 = v718 ? false : true;
      stdlib.assert(v719, {
        at: './index.rsh:81:14:application',
        fs: ['at ./index.rsh:150:30:application call to "withdrawPayout" (defined at: ./index.rsh:80:40:function exp)', 'at ./index.rsh:148:11:application call to [unknown function] (defined at: ./index.rsh:148:11:function exp)'],
        msg: 'You have no uplines',
        who: 'Schemers_withdraw'
        });
      const v720 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v472), null);
      const v721 = stdlib.fromSome(v720, stdlib.checkedBigNumberify('./index.rsh:83:45:decimal', stdlib.UInt_max, '0'));
      const v722 = stdlib.eq(v721, stdlib.checkedBigNumberify('./index.rsh:83:51:decimal', stdlib.UInt_max, '0'));
      const v723 = v722 ? false : true;
      stdlib.assert(v723, {
        at: './index.rsh:82:14:application',
        fs: ['at ./index.rsh:150:30:application call to "withdrawPayout" (defined at: ./index.rsh:80:40:function exp)', 'at ./index.rsh:148:11:application call to [unknown function] (defined at: ./index.rsh:148:11:function exp)'],
        msg: 'Insufficient Balance',
        who: 'Schemers_withdraw'
        });
      const v724 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v472), null);
      const v725 = stdlib.fromSome(v724, v382);
      const v726 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v725), null);
      const v727 = stdlib.fromSome(v726, stdlib.checkedBigNumberify('./index.rsh:89:63:decimal', stdlib.UInt_max, '0'));
      const v728 = stdlib.ge(v727, stdlib.checkedBigNumberify('./index.rsh:89:69:decimal', stdlib.UInt_max, '2'));
      stdlib.assert(v728, {
        at: './index.rsh:88:14:application',
        fs: ['at ./index.rsh:150:30:application call to "withdrawPayout" (defined at: ./index.rsh:80:40:function exp)', 'at ./index.rsh:148:11:application call to [unknown function] (defined at: ./index.rsh:148:11:function exp)'],
        msg: 'Need at least two down lines',
        who: 'Schemers_withdraw'
        });
      const v730 = stdlib.gt(v410, v383);
      stdlib.assert(v730, {
        at: './index.rsh:92:14:application',
        fs: ['at ./index.rsh:150:30:application call to "withdrawPayout" (defined at: ./index.rsh:80:40:function exp)', 'at ./index.rsh:148:11:application call to [unknown function] (defined at: ./index.rsh:148:11:function exp)'],
        msg: null,
        who: 'Schemers_withdraw'
        });
      let v732;
      switch (v720[0]) {
        case 'None': {
          const v733 = v720[1];
          v732 = stdlib.checkedBigNumberify('./index.rsh:96:19:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v734 = v720[1];
          const v735 = stdlib.mul(v734, stdlib.checkedBigNumberify('./index.rsh:97:25:decimal', stdlib.UInt_max, '30'));
          const v736 = stdlib.div(v735, stdlib.checkedBigNumberify('./index.rsh:97:31:decimal', stdlib.UInt_max, '100'));
          v732 = v736;
          
          break;
          }
        }
      const v738 = stdlib.gt(v410, v732);
      const v739 = v738 ? v732 : v410;
      const v741 = stdlib.ge(v410, v739);
      stdlib.assert(v741, {
        at: './index.rsh:100:16:application',
        fs: ['at ./index.rsh:150:39:application call to [unknown function] (defined at: ./index.rsh:93:19:function exp)', 'at ./index.rsh:148:11:application call to [unknown function] (defined at: ./index.rsh:148:11:function exp)'],
        msg: 'Balance Empty',
        who: 'Schemers_withdraw'
        });
      const v742 = await txn1.getOutput('Schemers_withdraw', 'v739', ctc3, v739);
      if (v232) {
        stdlib.protect(ctc0, await interact.out(v668, v742), {
          at: './index.rsh:143:7:application',
          fs: ['at ./index.rsh:143:7:application call to [unknown function] (defined at: ./index.rsh:143:7:function exp)', 'at ./index.rsh:103:12:application call to "k" (defined at: ./index.rsh:148:11:function exp)', 'at ./index.rsh:150:39:application call to [unknown function] (defined at: ./index.rsh:93:19:function exp)', 'at ./index.rsh:148:11:application call to [unknown function] (defined at: ./index.rsh:148:11:function exp)'],
          msg: 'out',
          who: 'Schemers_withdraw'
          });
        }
      else {
        }
      
      const v750 = stdlib.sub(v410, v739);
      ;
      const v755 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v725), null);
      const v756 = stdlib.fromSome(v755, stdlib.checkedBigNumberify('./index.rsh:106:69:decimal', stdlib.UInt_max, '0'));
      const v757 = stdlib.mul(v739, stdlib.checkedBigNumberify('./index.rsh:107:22:decimal', stdlib.UInt_max, '2'));
      const v758 = stdlib.add(v756, v757);
      await stdlib.mapSet(map4, v725, v758);
      await stdlib.mapSet(map4, v472, stdlib.checkedBigNumberify('./index.rsh:108:35:decimal', stdlib.UInt_max, '0'));
      const v759 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v387), null);
      const v760 = stdlib.fromSome(v759, stdlib.checkedBigNumberify('./index.rsh:109:61:decimal', stdlib.UInt_max, '0'));
      await stdlib.mapSet(map4, v387, v760);
      const v1245 = v750;
      return;
      
      break;
      }
    }
  
  
  };
export async function Schemers_checkBalance(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Schemers_checkBalance expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Schemers_checkBalance expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Schemers_checkBalance4(ctcTop, interact);}
  };
export async function Schemers_joinPyramid(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Schemers_joinPyramid expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Schemers_joinPyramid expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Schemers_joinPyramid4(ctcTop, interact);}
  };
export async function Schemers_timesUp(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Schemers_timesUp expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Schemers_timesUp expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Schemers_timesUp4(ctcTop, interact);}
  };
export async function Schemers_withdraw(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Schemers_withdraw expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Schemers_withdraw expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Schemers_withdraw4(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`Schemers_checkBalance()uint64`, `Schemers_joinPyramid(address)address`, `Schemers_timesUp()byte`, `Schemers_withdraw()uint64`],
    pure: [],
    sigs: [`Schemers_checkBalance()uint64`, `Schemers_joinPyramid(address)address`, `Schemers_timesUp()byte`, `Schemers_withdraw()uint64`]
    },
  appApproval: `BiAMAAEEAiAIXauYweMPmcOY7g+91664DkhQJgQBAAEBAAkBAAAAAAAAAAAiNQAxGEEFWSpkSSJbNQEhBVs1AjEZIxJBAAoxACghBq9mQgUlNhoAF0lBAFsiNQQjNQZJIQcMQAAfSSEIDEAACCEIEkQqQgBcIQcSRDYaATX/KTT/UEIAp0khCQxAABMhCRJEKjX/gAECNP9QMgNQQgCNgfGkspwKEkQqNf8oNP9QMgNQQgB4NhoCFzUENhoDNhoBF0mBAwxAA0pJJAxAAF0kEkQkNAESRDQESSISTDQCEhFEKGRJNQMhCls1/0k1BTX+gATU4BgtNP5QsDIGNP8PRIAJAAAAAAAAAwMBsCk1BzQDVwAgNAMhBFs0A1coIDT/IjIGNAMhC1tCA8lIJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hBFs1/lcoIDX9IQpbNfwhC1s1+0k1BTX6gAQUkUDUNPpQsDIGNPwMRDT6IlVJIwxAAk9JJQxAASElEkQxADT/E0QxAIgEBldUCTX5IjT5STX4I1s0+CJVTUQ0/zEAiAPsVzMhSTX3VwEgNPciVU01+CI0+IgD1lchCUk19yNbNPciVU0lD0Q0+zT+DUQ0+SJVQAAGIjX3QgASNPkjW0k19oEeC4FkCjX3QgAANPs09zT7NPcNTTX2NPs09g9EgAgAAAAAAAAC4zT2FlCwNPYWNQexIrIBNPayCCOyEDEAsgezNPgoNPiIA2MpIjT4iANcV1QJSTX1I1s09SJVTTT2JQsIFlA19VcAVDT1UGYxACgxAIgDNys19VcAVDT1UGY0/Sg0/YgDJSkiNP2IAx5XKglJNfUjWzT1IlVNFlA19VcAVDT1UGY0/zT+NP00/CMyBjT7NPYJQgJRSDT6VwEgNfk0/ogC9TT5NfiACAAAAAAAAAHYMQBQsDEANQcxADT/E0Q0/zEAiALDVwAhSTX3VwEgNPciVU0xABNEIjT4iAKrVyEJSTX2I1s09iJVTUk19yUMRDT4KDT4iAKQKTT3IwgWUDX2SVcAITT2UExXKjNQZjEAKDEAiAJyKTT4UDX2SVcAMzT2UExXVAlQZjEAKDEAiAJXKTEAUDX2VyE8NPZMUGY0+Cg0+IgCQSkiNPiIAjpXKglJNfYjWzT2IlVNIwgWUDX2SVcAKjT2UExXMypQZjEAKDEAiAISKzX2VwBUNPZQZjT4KDT4iAIAKSI0+IgB+VdUCUk19iNbNPYiVU00/ggWUDX2VwBUNPZQZjT/NP40/TT8IzIGNPs0/ghCASlIgAgAAAAAAAAB6CIxAIgBuldUCUk1+SNbNPkiVU0WULAiMQCIAaRXVAlJNfkjWzT5IlVNFjUHNP80/jT9NPwjMgY0+0IA4kkjDEAAiCMSRCM0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/gASai5F0sDT/MQASRDT/KDT/iAFMKTT/UDX+VyE8NP5MUGY0/yg0/4gBNik0/1A1/klXADM0/lBMV1QJUGY0/yg0/4gBGys1/lcAVDT+UGY0/zQDIQRbMQA0A4EwWzQDgShbCCMyBiJCAFRIgaCNBogA/SI0ARJENARJIhJMNAISEURJNQVJIls1/yEFWzX+gASs0R/DNP8WUDT+FlCwMQA0/xZQNP4WUDIGFlAoSwFXADhnSCM1ATIGNQJCAGU1/zX+Nf01/DX7Nfo1+TT9QQAjNPk0+hZQNPtQNPwWUDT/FlAoSwFXAFhnSCQ1ATIGNQJCAC+xIrIBNP+yCCOyEDT5sgezQgAAMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8NJMRhhQAAFSCEGr4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 93,
  stateKeys: 1,
  stateSize: 88,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v383",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v384",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v383",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v384",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T13",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Schemers_checkBalance0_62",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T12",
                    "name": "_Schemers_joinPyramid0_62",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Schemers_withdraw0_62",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T13",
                "name": "v473",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v768",
                "type": "bool"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v472",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v488",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v739",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v771",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Schemers_checkBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "Schemers_joinPyramid",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Schemers_timesUp",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Schemers_withdraw",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "address payable",
            "name": "_Some",
            "type": "address"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap1Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap2Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap3Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "address payable",
            "name": "_Some",
            "type": "address"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap4Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T13",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Schemers_checkBalance0_62",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T12",
                    "name": "_Schemers_joinPyramid0_62",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Schemers_withdraw0_62",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T13",
                "name": "v473",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v768",
                "type": "bool"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620023583803806200235883398101604081905262000026916200024a565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a16200008b3415600762000143565b620000c0604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b33808252602083810180515182850190815290518201516040808601918252436060808801828152600160008190559290925582519586019690965292519084015251928201929092529051608082015260a001604051602081830303815290604052600290805190602001906200013a9291906200016d565b505050620002e7565b81620001695760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017b90620002aa565b90600052602060002090601f0160209004810192826200019f5760008555620001ea565b82601f10620001ba57805160ff1916838001178555620001ea565b82800160010185558215620001ea579182015b82811115620001ea578251825591602001919060010190620001cd565b50620001f8929150620001fc565b5090565b5b80821115620001f85760008155600101620001fd565b604080519081016001600160401b03811182821017156200024457634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025e57600080fd5b6200026862000213565b835181526040601f19830112156200027f57600080fd5b6200028962000213565b60208581015182526040909501518582015293810193909352509092915050565b600181811c90821680620002bf57607f821691505b60208210811415620002e157634e487b7160e01b600052602260045260246000fd5b50919050565b61206180620002f76000396000f3fe6080604052600436106100e05760003560e01c806382b6476011610084578063acf0cc2211610056578063acf0cc221461021c578063cadc2e7a1461023c578063ee90ecaf1461025c578063ef3702ab1461026457005b806382b64760146101b957806383230757146101d1578063a98bf223146101e6578063ab53f2c6146101f957005b80633bc5b7bf116100bd5780633bc5b7bf1461015157806373cf3fbb1461017157806377e591d414610179578063817d57f31461018c57005b806306dc92ff146100e95780631e93b0f11461011f5780632c10a1591461013e57005b366100e757005b005b3480156100f557600080fd5b50610109610104366004611ab7565b61028f565b6040516101169190611b01565b60405180910390f35b34801561012b57600080fd5b506003545b604051908152602001610116565b6100e761014c366004611b51565b6102bb565b34801561015d57600080fd5b5061010961016c366004611ab7565b6102df565b610130610305565b6100e7610187366004611b6d565b610352565b34801561019857600080fd5b506101ac6101a7366004611ab7565b610372565b6040516101169190611b7f565b6101c1610398565b6040519015158152602001610116565b3480156101dd57600080fd5b50600154610130565b6100e76101f4366004611b51565b6103d2565b34801561020557600080fd5b5061020e6103f2565b604051610116929190611baf565b34801561022857600080fd5b506101ac610237366004611ab7565b61048f565b34801561024857600080fd5b506101ac610257366004611ab7565b6104b5565b6101306104db565b610277610272366004611ab7565b610525565b6040516001600160a01b039091168152602001610116565b60408051606081018252600080825260208201819052918101919091526102b582610585565b92915050565b6102c361184e565b6102db6102d536849003840184611cb5565b82610661565b5050565b60408051606081018252600080825260208201819052918101919091526102b5826108b3565b600061030f61184e565b610317611881565b61031f6118a0565b6000606082015260028152604080516020808201909252828152908301526103478284610940565b505060600151919050565b61035a61184e565b6102db61036c36849003840184611ceb565b82610940565b60408051606081018252600080825260208201819052918101919091526102b582611320565b60006103a261184e565b6103aa6118d6565b60408051602080820190925260008152908201526103c881836113e3565b5060400151919050565b6103da61184e565b6102db6103ec36849003840184611da4565b826113e3565b60006060600054600280805461040790611dfc565b80601f016020809104026020016040519081016040528092919081815260200182805461043390611dfc565b80156104805780601f1061045557610100808354040283529160200191610480565b820191906000526020600020905b81548152906001019060200180831161046357829003601f168201915b50505050509050915091509091565b60408051606081018252600080825260208201819052918101919091526102b5826115bb565b60408051606081018252600080825260208201819052918101919091526102b582611648565b60006104e561184e565b6104ed611881565b6104f56118a0565b60006020828101829052908252604080518083019091528281529083015261051d8284610940565b505051919050565b600061052f61184e565b610537611881565b61053f6118a0565b60408051602080820183526001600160a01b0388168252838301919091526001835281518082019092528282528301526105798284610940565b50506020015192915050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526007602052604090205460ff1660018111156105d1576105d1611adb565b1415610651576001600160a01b038216600090815260076020526040908190208151606081019092528054829060ff16600181111561061257610612611adb565b600181111561062357610623611adb565b81529054610100810460ff16151560208301526201000090046001600160a01b031660409091015292915050565b600080825260208201525b919050565b610671600160005414600a6116d5565b815161068c90158061068557508251600154145b600b6116d5565b60008080556002805461069e90611dfc565b80601f01602080910402602001604051908101604052809291908181526020018280546106ca90611dfc565b80156107175780601f106106ec57610100808354040283529160200191610717565b820191906000526020600020905b8154815290600101906020018083116106fa57829003601f168201915b505050505080602001905181019061072f9190611e31565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a1610786341560086116d5565b805161079e906001600160a01b0316331460096116d5565b80516001600160a01b039081166000908152600460209081526040808320805460ff1990811660019081179092558651861680865283862080546201000092830262010000600160b01b0319918216179091558851881687526007865284872080548416851790558851881680885285882080549190930291161790558651861685526008909352818420805490931681179092558451909316825291812090910155610849611900565b815181516001600160a01b03909116905260208083015182519091015280513360409182015282015160608301516108819190611ec4565b81516060015260208082018051600190528051439201919091525160006040909101526108ad816116fa565b50505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156108ff576108ff611adb565b1415610651576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561061257610612611adb565b61095060046000541460176116d5565b815161096b90158061096457508251600154145b60186116d5565b60008080556002805461097d90611dfc565b80601f01602080910402602001604051908101604052809291908181526020018280546109a990611dfc565b80156109f65780601f106109cb576101008083540402835291602001916109f6565b820191906000526020600020905b8154815290600101906020018083116109d957829003601f168201915b5050505050806020019051810190610a0e9190611edc565b9050610a1861194e565b610a298260600151431060196116d5565b7f8c12f02212ada7fc3de06e01a117304a130f6887cb28d15457948cb42bf690ac3385604051610a5a929190611f69565b60405180910390a16000602085015151516002811115610a7c57610a7c611adb565b1415610b9d57610a8e3415600c6116d5565b7fed2e78fc86bb459cddd79c5a1b7c7461ff3139a0b8f843a2763e609c1e383c4c6001610aba336115bb565b516001811115610acc57610acc611adb565b14610ad8576000610ae6565b610ae1336115bb565b604001515b60405190815260200160405180910390a16001610b02336115bb565b516001811115610b1457610b14611adb565b14610b20576000610b2e565b610b29336115bb565b604001515b8352610b38611900565b825181516001600160a01b039182169052602080850151835182015260408086015184519316928101929092526060808601518451909101528083018051600190528051439201919091526080850151905190910152610b97816116fa565b506108ad565b6001602085015151516002811115610bb757610bb7611adb565b1415610f1a5760208085015151604001518252820151610bda903414600d6116d5565b6040513381527f72f6bcef9e801e3088ef91527a898fa919d08f7b05ae9c220fb584dc9913a7129060200160405180910390a133602084018190528251610c3c916001600160a01b0390911614610c32576001610c35565b60005b600e6116d5565b610c96336001610c4b336108b3565b516001811115610c5d57610c5d611adb565b14610c69578351610c77565b610c72336108b3565b604001515b6001600160a01b031614610c8c576001610c8f565b60005b600f6116d5565b6001815151610ca490611648565b516001811115610cb657610cb6611adb565b14610cc2576000610cd3565b805151610cce90611648565b604001515b60208201819052610ce89060021160106116d5565b8051516001600160a01b03166000908152600560209081526040909120805460ff1916600190811790915590820151610d219190611ec4565b8151516001600160a01b0390811660009081526005602090815260408083206001908101959095553380845260078352818420805488515161ff01600160b01b0319918216620100009189168202178917909255600485528386208054929093029116178617905585515190931682526006905220805460ff1916821790558151518190610dae90611320565b516001811115610dc057610dc0611adb565b14610dcc576000610ddd565b815151610dd890611320565b604001515b610de79190611ec4565b8151516001600160a01b03908116600090815260066020908152604080832060019081019590955533835260088252808320805460ff1990811687178255908601849055865151909416835290912080549092168317909155830151825151909190610e52906115bb565b516001811115610e6457610e64611adb565b14610e70576000610e81565b815151610e7c906115bb565b604001515b610e8b9190611ec4565b8151516001600160a01b0316600090815260086020526040902060010155610eb1611900565b825181516001600160a01b039182169052602080850180518451830152604080870151855194169301929092526060808601518451909101528083018051600190525143910152516080840151610f089190611ec4565b602082015160400152610b97816116fa565b6002602085015151516002811115610f3457610f34611adb565b14156108ad57610f46341560116116d5565b8151610f6c906001600160a01b03163314610f62576001610f65565b60005b60126116d5565b610f75336115bb565b6040820152610fc4600060016040840151516001811115610f9857610f98611adb565b14610fa4576000610fae565b8260400151604001515b14610fba576001610fbd565b60005b60136116d5565b6001610fcf33610585565b516001811115610fe157610fe1611adb565b14610fed578151610ffb565b610ff633610585565b604001515b6001600160a01b031660608201526110566002600161101d8460600151611648565b51600181111561102f5761102f611adb565b1461103b57600061104d565b6110488360600151611648565b604001515b101560146116d5565b61106b826020015183608001511160156116d5565b6000604082015151600181111561108457611084611adb565b141561109657600060808201526110e3565b600160408201515160018111156110af576110af611adb565b14156110e357604080820151015160a082018190526064906110d390601e90611fd3565b6110dd9190611ff2565b60808201525b80608001518260800151116110fc578160800151611102565b80608001515b60c08201819052608083015161111b91111560166116d5565b7fc6bd24bf75c99f12fb9dc99571f3abef6fb0fdad1151f8fea4f3ebd1fe7cfcb18160c0015160405161115091815260200190565b60405180910390a160c081018051606085015251604051339180156108fc02916000818181858888f1935050505015801561118f573d6000803e3d6000fd5b5060608101516001600160a01b03166000908152600860205260409020805460ff1916600117905560c08101516111c890600290611fd3565b60016111d783606001516115bb565b5160018111156111e9576111e9611adb565b146111f5576000611207565b61120282606001516115bb565b604001515b6112119190611ec4565b60608201516001600160a01b03908116600090815260086020526040808220600190810194909455338252808220805460ff19908116861782559085018390558682018051909416835291208054909116831790555161127090611320565b51600181111561128257611282611adb565b1461128e5760006112a0565b61129b8260400151611320565b604001515b6040808401516001600160a01b03166000908152600860205220600101556112c6611900565b825181516001600160a01b039182169052602080850151835182015260408086015184519316920191909152606080850151835190910152808201805160019052514391015260c08201516080840151610f089190612014565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff16600181111561136c5761136c611adb565b1415610651576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff1660018111156113ad576113ad611adb565b60018111156113be576113be611adb565b81528154610100900460ff161515602082015260019091015460409091015292915050565b6113f3600460005414601b6116d5565b815161140e90158061140757508251600154145b601c6116d5565b60008080556002805461142090611dfc565b80601f016020809104026020016040519081016040528092919081815260200182805461144c90611dfc565b80156114995780601f1061146e57610100808354040283529160200191611499565b820191906000526020600020905b81548152906001019060200180831161147c57829003601f168201915b50505050508060200190518101906114b19190611edc565b90506114c58160600151431015601d6116d5565b6040805133815284516020808301919091528501515115158183015290517f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b949181900360600190a16115193415601a6116d5565b604051600181527f4b33adbd65e0ffaad69762beb555c1a1cd591d55e463dc6c5251bbfd2d4d8b309060200160405180910390a16001604083015261155c611900565b815181516001600160a01b0391821690526020808401518351820152604080850151845193169281019290925260608085015184519091015280830180516000905280514392019190915260808401519051909101526108ad816116fa565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526008602052604090205460ff16600181111561160757611607611adb565b1415610651576001600160a01b038216600090815260086020526040908190208151606081019092528054829060ff1660018111156113ad576113ad611adb565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff16600181111561169457611694611adb565b1415610651576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff1660018111156113ad576113ad611adb565b816102db5760405163100960cb60e01b81526004810182905260240160405180910390fd5b602081015151156117f1576117496040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b8151516001600160a01b039081168083528351602090810151818501908152855160409081015185168187019081528751606090810151818901908152858a01518401516080808b01918252600460005543600155855180890199909952955188860152925190971690860152945191840191909152925160a0808401919091528351808403909101815260c090920190925280516117ec9260029201906119bc565b505050565b805151602082015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611834573d6000803e3d6000fd5b506000808055600181905561184b90600290611a40565b50565b60405180608001604052806000815260200160006001600160a01b03168152602001600015158152602001600081525090565b60405180604001604052806000815260200161189b611a7a565b905290565b60408051608081019091528060008152600060208083018290526040805191820181529181529101908152600060209091015290565b60405180604001604052806000815260200161189b60405180602001604052806000151581525090565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260408051606081018252600080825260208281018290529282015291015290565b6040805161010081018252600060e08201818152825260208201529081016119916040805160608101909152806000815260006020820181905260409091015290565b815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b8280546119c890611dfc565b90600052602060002090601f0160209004810192826119ea5760008555611a30565b82601f10611a0357805160ff1916838001178555611a30565b82800160010185558215611a30579182015b82811115611a30578251825591602001919060010190611a15565b50611a3c929150611a8d565b5090565b508054611a4c90611dfc565b6000825580601f10611a5c575050565b601f01602090049060005260206000209081019061184b9190611a8d565b604051806020016040528061189b6118a0565b5b80821115611a3c5760008155600101611a8e565b6001600160a01b038116811461184b57600080fd5b600060208284031215611ac957600080fd5b8135611ad481611aa2565b9392505050565b634e487b7160e01b600052602160045260246000fd5b6002811061184b5761184b611adb565b81516060820190611b1181611af1565b82526020838101511515908301526040928301516001600160a01b0316929091019190915290565b600060408284031215611b4b57600080fd5b50919050565b600060408284031215611b6357600080fd5b611ad48383611b39565b600060a08284031215611b4b57600080fd5b81516060820190611b8f81611af1565b808352506020830151151560208301526040830151604083015292915050565b82815260006020604081840152835180604085015260005b81811015611be357858101830151858201606001528201611bc7565b81811115611bf5576000606083870101525b50601f01601f191692909201606001949350505050565b6040805190810167ffffffffffffffff81118282101715611c3d57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715611c3d57634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff81118282101715611c3d57634e487b7160e01b600052604160045260246000fd5b8035801515811461065c57600080fd5b600060408284031215611cc757600080fd5b611ccf611c0c565b82358152611cdf60208401611ca5565b60208201529392505050565b600081830360a0811215611cfe57600080fd5b611d06611c0c565b833581526080601f1983011215611d1c57600080fd5b611d24611c43565b611d2c611c74565b602086013560038110611d3e57600080fd5b8152611d4c60408701611ca5565b60208201526020605f1985011215611d6357600080fd5b611d6b611c43565b93506060860135611d7b81611aa2565b845260408101849052611d9060808701611ca5565b606082015281526020820152949350505050565b60008183036040811215611db757600080fd5b611dbf611c0c565b833581526020601f1983011215611dd557600080fd5b611ddd611c43565b9150611deb60208501611ca5565b825260208101919091529392505050565b600181811c90821680611e1057607f821691505b60208210811415611b4b57634e487b7160e01b600052602260045260246000fd5b600060808284031215611e4357600080fd5b6040516080810181811067ffffffffffffffff82111715611e7457634e487b7160e01b600052604160045260246000fd5b6040528251611e8281611aa2565b808252506020830151602082015260408301516040820152606083015160608201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611ed757611ed7611eae565b500190565b600060a08284031215611eee57600080fd5b60405160a0810181811067ffffffffffffffff82111715611f1f57634e487b7160e01b600052604160045260246000fd5b6040528251611f2d81611aa2565b8152602083810151908201526040830151611f4781611aa2565b6040820152606083810151908201526080928301519281019290925250919050565b6001600160a01b038381168252825160208084019190915283015151805160c0840192919060038110611f9e57611f9e611adb565b80604086015250602081015115156060850152816040820151511660808501526060810151151560a085015250509392505050565b6000816000190483118215151615611fed57611fed611eae565b500290565b60008261200f57634e487b7160e01b600052601260045260246000fd5b500490565b60008282101561202657612026611eae565b50039056fea264697066735822122037642c0ded55719edc74b38f9d64afe00ccefa65a83f3838eed6ab207c25795764736f6c634300080c0033`,
  BytecodeLen: 9048,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:38:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:159:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:54:53:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Deployer": Deployer,
  "Schemers_checkBalance": Schemers_checkBalance,
  "Schemers_joinPyramid": Schemers_joinPyramid,
  "Schemers_timesUp": Schemers_timesUp,
  "Schemers_withdraw": Schemers_withdraw
  };
export const _APIs = {
  Schemers: {
    checkBalance: Schemers_checkBalance,
    joinPyramid: Schemers_joinPyramid,
    timesUp: Schemers_timesUp,
    withdraw: Schemers_withdraw
    }
  };
