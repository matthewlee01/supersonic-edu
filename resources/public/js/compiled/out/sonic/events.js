// Compiled by ClojureScript 1.10.238 {}
goog.provide('sonic.events');
goog.require('cljs.core');
goog.require('sonic.core');
goog.require('re_frame.core');
goog.require('sonic.db');
/**
 * dispatches the given action event from button
 */
sonic.events.actionDispatch = (function sonic$events$actionDispatch(event){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null));
});
});
/**
 * dispatches the damage system event with parameters
 */
sonic.events.damageDispatch = (function sonic$events$damageDispatch(system,type){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"damageSystem","damageSystem",-1223096996),system,type], null));
});
});
sonic.events.systemDisabled_QMARK_ = (function sonic$events$systemDisabled_QMARK_(system,type){
if(((0) >= cljs.core.get.call(null,system.call(null,new cljs.core.Keyword(null,"systems","systems",-1015374944).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null))))),(0)))){
return true;
} else {
return false;
}
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("sonic.events","initialize-db","sonic.events/initialize-db",-641039695),(function (_,___$1){
sonic.core.devLog.call(null,"initializing");

return sonic.db.default_db;
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("sonic.events","gameStart","sonic.events/gameStart",-1041074427),(function (cofx,effects){
sonic.core.devLog.call(null,"start of game");

var playerName = prompt("Enter your name:");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"playerName","playerName",1504328524),((((cljs.core._EQ_.call(null,playerName,"")) || (cljs.core._EQ_.call(null,playerName,null))))?"Player":playerName)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playerPhase","playerPhase",-496299256)], null)], null);
}));
sonic.events.gameEnd = (function sonic$events$gameEnd(db,p__25415){
var vec__25416 = p__25415;
var _ = cljs.core.nth.call(null,vec__25416,(0),null);
var loser = cljs.core.nth.call(null,vec__25416,(1),null);
sonic.core.devLog.call(null,"end of game");

alert(["Game Over! ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,loser,new cljs.core.Keyword(null,"playerShip","playerShip",2104484)))?cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playerName","playerName",1504328524)], null))):"Enemy")),"'s ship was destroyed!"].join(''));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"gameOver?","gameOver?",-425708201),true);
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"gameEnd","gameEnd",-1148810376),(function (db,p__25419){
var vec__25420 = p__25419;
var _ = cljs.core.nth.call(null,vec__25420,(0),null);
var loser = cljs.core.nth.call(null,vec__25420,(1),null);
sonic.core.devLog.call(null,"end of game");

alert(["Game Over! ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,loser,new cljs.core.Keyword(null,"playerShip","playerShip",2104484)))?cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playerName","playerName",1504328524)], null))):"Enemy")),"'s ship was destroyed!"].join(''));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"gameOver?","gameOver?",-425708201),true);
}));
sonic.events.calcShieldsMax = (function sonic$events$calcShieldsMax(shieldsSystemRank){
return (((shieldsSystemRank - (1)) * (15)) + (100));
});
sonic.events.diceRoll = (function sonic$events$diceRoll(){
return ((1) + cljs.core.rand_int.call(null,(6)));
});
sonic.events.calcShieldsStrength = (function sonic$events$calcShieldsStrength(shieldsSystemRank,amount){
return ((amount * shieldsSystemRank) * (8));
});
sonic.events.chargeShields = (function sonic$events$chargeShields(ship,amount){
var shieldsSystem = new cljs.core.Keyword(null,"shields","shields",-295786721).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"systems","systems",-1015374944).cljs$core$IFn$_invoke$arity$1(ship));
var shieldsCurrentValue = new cljs.core.Keyword(null,"shields","shields",-295786721).cljs$core$IFn$_invoke$arity$1(ship);
var shieldsSystemRank = cljs.core.get.call(null,shieldsSystem,(1));
var shieldsMax = sonic.events.calcShieldsMax.call(null,shieldsSystemRank);
var shieldsStrength = sonic.events.calcShieldsStrength.call(null,shieldsSystemRank,amount);
var newShields = (shieldsCurrentValue + shieldsStrength);
if(cljs.core.truth_(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devMode","devMode",-540703912)], null))))){
cljs.core.println.call(null,["shields boosted by ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((newShields - shieldsCurrentValue))].join(''));
} else {
}

return cljs.core.assoc.call(null,ship,new cljs.core.Keyword(null,"shields","shields",-295786721),(((newShields > shieldsMax))?shieldsMax:newShields));
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"actionFire","actionFire",-1118207098),(function (cofx,event){
sonic.core.devLog.call(null,"player toggling firing mode");

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggleFiringMode","toggleFiringMode",804668357)], null)], null);
}));
sonic.events.actionChargeShields = (function sonic$events$actionChargeShields(cofx,events){
sonic.core.devLog.call(null,"player charging shields");

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"playerShip","playerShip",2104484),sonic.events.chargeShields.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playerShip","playerShip",2104484)], null))),sonic.events.diceRoll.call(null))),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"changePhase","changePhase",895785201)], null)], null);
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"actionChargeShields","actionChargeShields",-339901575),sonic.events.actionChargeShields);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"actionFlee","actionFlee",-176341741),(function (cofx,effects){
sonic.core.devLog.call(null,"player fleeing");

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"changePhase","changePhase",895785201)], null)], null);
}));
sonic.events.playerSystemsActive_QMARK_ = (function sonic$events$playerSystemsActive_QMARK_(systemtype){
var ship = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playerShip","playerShip",2104484)], null)));
var system = systemtype.call(null,new cljs.core.Keyword(null,"systems","systems",-1015374944).cljs$core$IFn$_invoke$arity$1(ship));
if((cljs.core.get.call(null,system,(0)) > (0))){
return systemtype;
} else {
return false;
}
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"enemyChargeShields","enemyChargeShields",587872441),(function (cofx,events){
sonic.core.devLog.call(null,"enemy charging shields");

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"enemyShip","enemyShip",-701356690),sonic.events.chargeShields.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemyShip","enemyShip",-701356690)], null))),sonic.events.diceRoll.call(null))),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"changePhase","changePhase",895785201)], null)], null);
}));
sonic.events.enemyChooseAction = (function sonic$events$enemyChooseAction(enemyShip,playerShip){
sonic.core.devLog.call(null,"enemy choosing action");

var enemySystems = new cljs.core.Keyword(null,"systems","systems",-1015374944).cljs$core$IFn$_invoke$arity$1(enemyShip);
var enemyShields = new cljs.core.Keyword(null,"shields","shields",-295786721).cljs$core$IFn$_invoke$arity$1(enemyShip);
var playerSystems = cljs.core.keys.call(null,new cljs.core.Keyword(null,"systems","systems",-1015374944).cljs$core$IFn$_invoke$arity$1(playerShip));
var playerActiveSystems = cljs.core.remove.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,sonic.events.playerSystemsActive_QMARK_,playerSystems));
if(sonic.events.systemDisabled_QMARK_.call(null,new cljs.core.Keyword(null,"weapons","weapons",-1983639898),new cljs.core.Keyword(null,"enemyShip","enemyShip",-701356690)) === false){
sonic.core.devLog.call(null,"enemy has decided to fire");

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"damageSystem","damageSystem",-1223096996),cljs.core.rand_nth.call(null,playerActiveSystems),new cljs.core.Keyword(null,"playerShip","playerShip",2104484)], null);
} else {
if(sonic.events.systemDisabled_QMARK_.call(null,new cljs.core.Keyword(null,"shields","shields",-295786721),new cljs.core.Keyword(null,"enemyShip","enemyShip",-701356690)) === false){
sonic.core.devLog.call(null,"enemy has decided to charge their shields");

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemyChargeShields","enemyChargeShields",587872441)], null);
} else {
sonic.core.devLog.call(null,"enemy has decided to pass their phase");

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"changePhase","changePhase",895785201)], null);
}
}
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"changePhase","changePhase",895785201),(function (cofx,effects){
sonic.core.devLog.call(null,"changing phase");

var phase = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"phase","phase",575722892)], null)));
if(cljs.core._EQ_.call(null,phase,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"phase","phase",575722892),(1)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemyPhase","enemyPhase",111549821)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"phase","phase",575722892),(0)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playerPhase","playerPhase",-496299256)], null)], null);
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"enemyPhase","enemyPhase",111549821),(function (cofx,effects){
sonic.core.devLog.call(null,"start of enemy phase");

var playerShip = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playerShip","playerShip",2104484)], null)));
var enemyShip = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemyShip","enemyShip",-701356690)], null)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),sonic.events.enemyChooseAction.call(null,enemyShip,playerShip)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"logHistory","logHistory",473291914),(function (db,_){
sonic.core.devLog.call(null,"logging turn");

var newHistory = cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db], null)));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"history","history",-247395220),newHistory);
}));
sonic.events.playerPhase = (function sonic$events$playerPhase(cofx,effects){
var newTurn = (cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"turn","turn",75759344)], null))) + (1));
sonic.core.devLog.call(null,"start of player phase");

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"turn","turn",75759344),newTurn),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"logHistory","logHistory",473291914)], null)], null);
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"playerPhase","playerPhase",-496299256),sonic.events.playerPhase);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("sonic.events","rewindTurn","sonic.events/rewindTurn",-734079357),(function (cofx,p__25423){
var vec__25424 = p__25423;
var _ = cljs.core.nth.call(null,vec__25424,(0),null);
var turn = cljs.core.nth.call(null,vec__25424,(1),null);
sonic.core.devLog.call(null,["rewinding to turn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(turn)].join(''));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null))),(turn - (1))),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"logHistory","logHistory",473291914)], null)], null);
}));
sonic.events.toggleFiringMode = (function sonic$events$toggleFiringMode(db,_){
var firing_QMARK_ = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"firing?","firing?",-1865348313)], null)));
if(cljs.core.truth_(firing_QMARK_)){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"firing?","firing?",-1865348313),false);
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"firing?","firing?",-1865348313),true);
}
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"toggleFiringMode","toggleFiringMode",804668357),sonic.events.toggleFiringMode);
sonic.events.toggleDevMode = (function sonic$events$toggleDevMode(db,_){
var devMode = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devMode","devMode",-540703912)], null)));
if(cljs.core.truth_(devMode)){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"devMode","devMode",-540703912),false);
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"devMode","devMode",-540703912),true);
}
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("sonic.events","toggleDevMode","sonic.events/toggleDevMode",-883524574),sonic.events.toggleDevMode);
sonic.events.calcDamage = (function sonic$events$calcDamage(attackRank,diceRoll){
return ((diceRoll * attackRank) * (10));
});
sonic.events.newHP = (function sonic$events$newHP(p__25427){
var vec__25428 = p__25427;
var defender = cljs.core.nth.call(null,vec__25428,(0),null);
var attacker = cljs.core.nth.call(null,vec__25428,(1),null);
var system = cljs.core.nth.call(null,vec__25428,(2),null);
var damage = cljs.core.nth.call(null,vec__25428,(3),null);
var defenderHP = new cljs.core.Keyword(null,"HP","HP",-457348996).cljs$core$IFn$_invoke$arity$1(defender);
var defenderShields = new cljs.core.Keyword(null,"shields","shields",-295786721).cljs$core$IFn$_invoke$arity$1(defender);
var HPDamage = ((((defenderShields - damage) > (0)))?(0):(damage - defenderShields));
var newHPVal = (defenderHP - HPDamage);
var destroyed_QMARK_ = (((newHPVal <= (0)))?true:false);
if(destroyed_QMARK_){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gameEnd","gameEnd",-1148810376),((cljs.core._EQ_.call(null,defender,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playerShip","playerShip",2104484)], null)))))?new cljs.core.Keyword(null,"playerShip","playerShip",2104484):new cljs.core.Keyword(null,"enemyShip","enemyShip",-701356690))], null));
} else {
}

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,defender,new cljs.core.Keyword(null,"HP","HP",-457348996),(defenderHP - HPDamage)),attacker,system,damage], null);
});
sonic.events.newShields = (function sonic$events$newShields(p__25431){
var vec__25432 = p__25431;
var defender = cljs.core.nth.call(null,vec__25432,(0),null);
var attacker = cljs.core.nth.call(null,vec__25432,(1),null);
var system = cljs.core.nth.call(null,vec__25432,(2),null);
var damage = cljs.core.nth.call(null,vec__25432,(3),null);
var defenderShields = new cljs.core.Keyword(null,"shields","shields",-295786721).cljs$core$IFn$_invoke$arity$1(defender);
var shieldsDamage = ((((defenderShields - damage) > (0)))?damage:defenderShields);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,defender,new cljs.core.Keyword(null,"shields","shields",-295786721),(defenderShields - shieldsDamage)),attacker,system,damage], null);
});
sonic.events.newSystemHP = (function sonic$events$newSystemHP(p__25435){
var vec__25436 = p__25435;
var defender = cljs.core.nth.call(null,vec__25436,(0),null);
var attacker = cljs.core.nth.call(null,vec__25436,(1),null);
var system = cljs.core.nth.call(null,vec__25436,(2),null);
var damage = cljs.core.nth.call(null,vec__25436,(3),null);
var defenderShields = new cljs.core.Keyword(null,"shields","shields",-295786721).cljs$core$IFn$_invoke$arity$1(defender);
if((defenderShields <= (0))){
var systemHP = cljs.core.get.call(null,system.call(null,new cljs.core.Keyword(null,"systems","systems",-1015374944).cljs$core$IFn$_invoke$arity$1(defender)),(0));
var attackRank = cljs.core.get.call(null,new cljs.core.Keyword(null,"weapons","weapons",-1983639898).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"systems","systems",-1015374944).cljs$core$IFn$_invoke$arity$1(attacker)),(1));
var systemDamage = ((((systemHP - attackRank) > (0)))?attackRank:systemHP);
var systemRank = cljs.core.get.call(null,system.call(null,new cljs.core.Keyword(null,"systems","systems",-1015374944).cljs$core$IFn$_invoke$arity$1(defender)),(1));
var newSystem = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(systemHP - systemDamage),systemRank], null);
var newSystemsMap = cljs.core.assoc.call(null,new cljs.core.Keyword(null,"systems","systems",-1015374944).cljs$core$IFn$_invoke$arity$1(defender),system,newSystem);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,defender,new cljs.core.Keyword(null,"systems","systems",-1015374944),newSystemsMap),attacker,system], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [defender,attacker,system,damage], null);
}
});
sonic.events.damageSystem = (function sonic$events$damageSystem(cofx,p__25439){
var vec__25440 = p__25439;
var _ = cljs.core.nth.call(null,vec__25440,(0),null);
var system = cljs.core.nth.call(null,vec__25440,(1),null);
var type = cljs.core.nth.call(null,vec__25440,(2),null);
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"enemyShip","enemyShip",-701356690))){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggleFiringMode","toggleFiringMode",804668357)], null));
} else {
}

var defender = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null)));
var attacker = ((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"playerShip","playerShip",2104484)))?cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playerShip","playerShip",2104484)], null))):cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemyShip","enemyShip",-701356690)], null))));
var attackRank = cljs.core.get.call(null,new cljs.core.Keyword(null,"weapons","weapons",-1983639898).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"systems","systems",-1015374944).cljs$core$IFn$_invoke$arity$1(attacker)),(1));
var diceRoll = sonic.events.diceRoll.call(null);
var damage = sonic.events.calcDamage.call(null,attackRank,diceRoll);
sonic.core.devLog.call(null,["target took ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(damage)," damage"].join(''));

var newDamagedShip = cljs.core.get.call(null,sonic.events.newSystemHP.call(null,sonic.events.newShields.call(null,sonic.events.newHP.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [defender,attacker,system,damage], null)))),(0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),type,newDamagedShip),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"changePhase","changePhase",895785201)], null)], null);
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"damageSystem","damageSystem",-1223096996),(function (cofx,p__25443){
var vec__25444 = p__25443;
var _ = cljs.core.nth.call(null,vec__25444,(0),null);
var system = cljs.core.nth.call(null,vec__25444,(1),null);
var type = cljs.core.nth.call(null,vec__25444,(2),null);
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"enemyShip","enemyShip",-701356690))){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggleFiringMode","toggleFiringMode",804668357)], null));
} else {
}

var defender = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null)));
var attacker = ((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"playerShip","playerShip",2104484)))?cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playerShip","playerShip",2104484)], null))):cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemyShip","enemyShip",-701356690)], null))));
var attackRank = cljs.core.get.call(null,new cljs.core.Keyword(null,"weapons","weapons",-1983639898).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"systems","systems",-1015374944).cljs$core$IFn$_invoke$arity$1(attacker)),(1));
var diceRoll = sonic.events.diceRoll.call(null);
var damage = sonic.events.calcDamage.call(null,attackRank,diceRoll);
sonic.core.devLog.call(null,["target took ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(damage)," damage"].join(''));

var newDamagedShip = cljs.core.get.call(null,sonic.events.newSystemHP.call(null,sonic.events.newShields.call(null,sonic.events.newHP.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [defender,attacker,system,damage], null)))),(0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),type,newDamagedShip),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"changePhase","changePhase",895785201)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"doNothing","doNothing",-1412297874),(function (db,_){
sonic.core.devLog.call(null,"nothing");

return db;
}));

//# sourceMappingURL=events.js.map?rel=1532376120650
