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
sonic.events.damageDispatch = (function sonic$events$damageDispatch(system,type,firingType){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"damageShip","damageShip",-505240326),system,type,firingType], null));
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
sonic.events.gameEnd = (function sonic$events$gameEnd(db,p__23250){
var vec__23251 = p__23250;
var _ = cljs.core.nth.call(null,vec__23251,(0),null);
var loser = cljs.core.nth.call(null,vec__23251,(1),null);
sonic.core.devLog.call(null,"end of game");

alert(["Game Over! ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,loser,new cljs.core.Keyword(null,"playerShip","playerShip",2104484)))?cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playerName","playerName",1504328524)], null))):"Enemy")),"'s ship was destroyed!"].join(''));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"gameOver?","gameOver?",-425708201),true);
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"gameEnd","gameEnd",-1148810376),(function (db,p__23254){
var vec__23255 = p__23254;
var _ = cljs.core.nth.call(null,vec__23255,(0),null);
var loser = cljs.core.nth.call(null,vec__23255,(1),null);
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

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setFiringType","setFiringType",-1728144712),new cljs.core.Keyword(null,"lasers","lasers",-427107788)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"actionLaunch","actionLaunch",657232081),(function (cofx,event){
sonic.core.devLog.call(null,"missiles placeholder");

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setFiringType","setFiringType",-1728144712),new cljs.core.Keyword(null,"missiles","missiles",-600699149)], null)], null);
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
sonic.events.playerSystemsActive_QMARK_ = (function sonic$events$playerSystemsActive_QMARK_(systemType){
var ship = sonic.db.default_db.call(null,new cljs.core.Keyword(null,"playerShip","playerShip",2104484));
var system = systemType.call(null,new cljs.core.Keyword(null,"systems","systems",-1015374944).cljs$core$IFn$_invoke$arity$1(ship));
if((cljs.core.get.call(null,system,(0)) > (0))){
return systemType;
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
if(sonic.events.systemDisabled_QMARK_.call(null,new cljs.core.Keyword(null,"lasers","lasers",-427107788),new cljs.core.Keyword(null,"enemyShip","enemyShip",-701356690)) === false){
sonic.core.devLog.call(null,"enemy has decided to fire");

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"damageShip","damageShip",-505240326),cljs.core.rand_nth.call(null,playerActiveSystems),new cljs.core.Keyword(null,"playerShip","playerShip",2104484),new cljs.core.Keyword(null,"lasers","lasers",-427107788)], null);
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
if(cljs.core._EQ_.call(null,false,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gameOver?","gameOver?",-425708201)], null))))){
sonic.core.devLog.call(null,"changing phase");

var phase = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"phase","phase",575722892)], null)));
if(cljs.core._EQ_.call(null,phase,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"phase","phase",575722892),(1)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemyPhase","enemyPhase",111549821)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"phase","phase",575722892),(0)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playerPhase","playerPhase",-496299256)], null)], null);
}
} else {
return null;
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
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("sonic.events","rewindTurn","sonic.events/rewindTurn",-734079357),(function (cofx,p__23258){
var vec__23259 = p__23258;
var _ = cljs.core.nth.call(null,vec__23259,(0),null);
var turn = cljs.core.nth.call(null,vec__23259,(1),null);
sonic.core.devLog.call(null,["rewinding to turn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(turn)].join(''));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null))),(turn - (1))),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"logHistory","logHistory",473291914)], null)], null);
}));
sonic.events.setFiringType = (function sonic$events$setFiringType(cofx,p__23262){
var vec__23263 = p__23262;
var _ = cljs.core.nth.call(null,vec__23263,(0),null);
var firingType = cljs.core.nth.call(null,vec__23263,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"firingType","firingType",5090382),firingType),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggleFiringMode","toggleFiringMode",804668357)], null)], null);
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"setFiringType","setFiringType",-1728144712),sonic.events.setFiringType);
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
sonic.events.calcLaserDamage = (function sonic$events$calcLaserDamage(attackRank,diceRoll){
return ((diceRoll * attackRank) * (10));
});
sonic.events.calcMissileDamage = (function sonic$events$calcMissileDamage(attackRank,diceRoll){
return ((diceRoll * attackRank) * (5));
});
sonic.events.newHP = (function sonic$events$newHP(p__23266){
var vec__23267 = p__23266;
var defender = cljs.core.nth.call(null,vec__23267,(0),null);
var attacker = cljs.core.nth.call(null,vec__23267,(1),null);
var system = cljs.core.nth.call(null,vec__23267,(2),null);
var damage = cljs.core.nth.call(null,vec__23267,(3),null);
var firingType = cljs.core.nth.call(null,vec__23267,(4),null);
var defenderHP = new cljs.core.Keyword(null,"HP","HP",-457348996).cljs$core$IFn$_invoke$arity$1(defender);
var defenderShields = new cljs.core.Keyword(null,"shields","shields",-295786721).cljs$core$IFn$_invoke$arity$1(defender);
var HPDamage = ((cljs.core._EQ_.call(null,firingType,new cljs.core.Keyword(null,"lasers","lasers",-427107788)))?((((defenderShields - damage) > (0)))?(0):(damage - defenderShields)):damage);
var newHPVal = (defenderHP - HPDamage);
var destroyed_QMARK_ = (((newHPVal <= (0)))?true:false);
if(destroyed_QMARK_){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gameEnd","gameEnd",-1148810376),((cljs.core._EQ_.call(null,defender,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playerShip","playerShip",2104484)], null)))))?new cljs.core.Keyword(null,"playerShip","playerShip",2104484):new cljs.core.Keyword(null,"enemyShip","enemyShip",-701356690))], null));
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,defender,new cljs.core.Keyword(null,"HP","HP",-457348996),(defenderHP - HPDamage)),attacker,system,damage,firingType], null);
});
sonic.events.newShields = (function sonic$events$newShields(p__23270){
var vec__23271 = p__23270;
var defender = cljs.core.nth.call(null,vec__23271,(0),null);
var attacker = cljs.core.nth.call(null,vec__23271,(1),null);
var system = cljs.core.nth.call(null,vec__23271,(2),null);
var damage = cljs.core.nth.call(null,vec__23271,(3),null);
var firingType = cljs.core.nth.call(null,vec__23271,(4),null);
var defenderShields = new cljs.core.Keyword(null,"shields","shields",-295786721).cljs$core$IFn$_invoke$arity$1(defender);
var shieldsDamage = ((cljs.core._EQ_.call(null,firingType,new cljs.core.Keyword(null,"lasers","lasers",-427107788)))?((((defenderShields - damage) > (0)))?damage:defenderShields):(0));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,defender,new cljs.core.Keyword(null,"shields","shields",-295786721),(defenderShields - shieldsDamage)),attacker,system,damage,firingType], null);
});
sonic.events.newSystemHP = (function sonic$events$newSystemHP(p__23274){
var vec__23275 = p__23274;
var defender = cljs.core.nth.call(null,vec__23275,(0),null);
var attacker = cljs.core.nth.call(null,vec__23275,(1),null);
var system = cljs.core.nth.call(null,vec__23275,(2),null);
var damage = cljs.core.nth.call(null,vec__23275,(3),null);
var firingType = cljs.core.nth.call(null,vec__23275,(4),null);
var defenderShields = new cljs.core.Keyword(null,"shields","shields",-295786721).cljs$core$IFn$_invoke$arity$1(defender);
if((((((defenderShields <= (0))) && (cljs.core._EQ_.call(null,firingType,new cljs.core.Keyword(null,"lasers","lasers",-427107788))))) || (cljs.core._EQ_.call(null,firingType,new cljs.core.Keyword(null,"missiles","missiles",-600699149))))){
var systemHP = cljs.core.get.call(null,system.call(null,new cljs.core.Keyword(null,"systems","systems",-1015374944).cljs$core$IFn$_invoke$arity$1(defender)),(0));
var attackRank = cljs.core.get.call(null,new cljs.core.Keyword(null,"lasers","lasers",-427107788).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"systems","systems",-1015374944).cljs$core$IFn$_invoke$arity$1(attacker)),(1));
var systemDamage = ((((systemHP - attackRank) > (0)))?attackRank:systemHP);
var systemRank = cljs.core.get.call(null,system.call(null,new cljs.core.Keyword(null,"systems","systems",-1015374944).cljs$core$IFn$_invoke$arity$1(defender)),(1));
var newSystem = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(systemHP - systemDamage),systemRank], null);
var newSystemsMap = cljs.core.assoc.call(null,new cljs.core.Keyword(null,"systems","systems",-1015374944).cljs$core$IFn$_invoke$arity$1(defender),system,newSystem);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,defender,new cljs.core.Keyword(null,"systems","systems",-1015374944),newSystemsMap),attacker,system], null);
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [defender,attacker,system,damage,firingType], null);
}
});
sonic.events.damageShip = (function sonic$events$damageShip(cofx,p__23278){
var vec__23279 = p__23278;
var _ = cljs.core.nth.call(null,vec__23279,(0),null);
var system = cljs.core.nth.call(null,vec__23279,(1),null);
var type = cljs.core.nth.call(null,vec__23279,(2),null);
var firingType = cljs.core.nth.call(null,vec__23279,(3),null);
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"enemyShip","enemyShip",-701356690))){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggleFiringMode","toggleFiringMode",804668357)], null));
} else {
}

var defender = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null)));
var attacker = ((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"playerShip","playerShip",2104484)))?cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playerShip","playerShip",2104484)], null))):cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemyShip","enemyShip",-701356690)], null))));
var attackRank = cljs.core.get.call(null,firingType.call(null,new cljs.core.Keyword(null,"systems","systems",-1015374944).cljs$core$IFn$_invoke$arity$1(attacker)),(1));
var diceRoll = sonic.events.diceRoll.call(null);
var damage = ((cljs.core._EQ_.call(null,firingType,new cljs.core.Keyword(null,"lasers","lasers",-427107788)))?sonic.events.calcLaserDamage.call(null,attackRank,diceRoll):sonic.events.calcMissileDamage.call(null,attackRank,diceRoll));
sonic.core.devLog.call(null,["target took ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(damage)," damage"].join(''));

var newDamagedShip = cljs.core.get.call(null,sonic.events.newSystemHP.call(null,sonic.events.newShields.call(null,sonic.events.newHP.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [defender,attacker,system,damage,firingType], null)))),(0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),type,newDamagedShip),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"changePhase","changePhase",895785201)], null)], null);
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"damageShip","damageShip",-505240326),sonic.events.damageShip);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"doNothing","doNothing",-1412297874),(function (db,_){
sonic.core.devLog.call(null,"nothing");

return db;
}));

//# sourceMappingURL=events.js.map?rel=1532455819426
