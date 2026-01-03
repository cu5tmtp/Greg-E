ServerEvents.recipes((event) => {

    //Remove recipe of power flowers
    event.remove({ id: 'projectexpansion:power_flower/basic' })
    event.remove({ id: 'projectexpansion:power_flower/dark' })
    event.remove({ id: 'projectexpansion:power_flower/dark_upgrade' })
    event.remove({ id: 'projectexpansion:power_flower/red' })
    event.remove({ id: 'projectexpansion:power_flower/red_upgrade' })
    event.remove({ id: 'projectexpansion:power_flower/magenta' })
    event.remove({ id: 'projectexpansion:power_flower/magenta_upgrade' })
    event.remove({ id: 'projectexpansion:power_flower/pink' })
    event.remove({ id: 'projectexpansion:power_flower/pink_upgrade' })
    event.remove({ id: 'projectexpansion:power_flower/purple' })
    event.remove({ id: 'projectexpansion:power_flower/purple_upgrade' })
    event.remove({ id: 'projectexpansion:power_flower/violet' })
    event.remove({ id: 'projectexpansion:power_flower/violet_upgrade' })
    event.remove({ id: 'projectexpansion:power_flower/blue' })
    event.remove({ id: 'projectexpansion:power_flower/blue_upgrade' })
    event.remove({ id: 'projectexpansion:power_flower/cyan' })
    event.remove({ id: 'projectexpansion:power_flower/cyan_upgrade' })
    event.remove({ id: 'projectexpansion:power_flower/green' })
    event.remove({ id: 'projectexpansion:power_flower/green_upgrade' })
    event.remove({ id: 'projectexpansion:power_flower/lime' })
    event.remove({ id: 'projectexpansion:power_flower/lime_upgrade' })
    event.remove({ id: 'projectexpansion:power_flower/yellow' })
    event.remove({ id: 'projectexpansion:power_flower/yellow_upgrade' })
    event.remove({ id: 'projectexpansion:power_flower/orange' })
    event.remove({ id: 'projectexpansion:power_flower/orange_upgrade' })
    event.remove({ id: 'projectexpansion:power_flower/white' })
    event.remove({ id: 'projectexpansion:power_flower/white_upgrade' })
    event.remove({ id: 'projectexpansion:power_flower/fading' })
    event.remove({ id: 'projectexpansion:power_flower/fading_upgrade' })
    event.remove({ id: 'projectexpansion:power_flower/final' })
    event.remove({ id: 'projectexpansion:power_flower/final_upgrade' })

    event.remove({ id: 'gtceu:shaped/steam_miner_bronze' })
    event.remove({ id: 'gtceu:shaped/steam_miner_steel' })
    event.remove({ id: 'gtceu:shaped/lv_miner' })
    event.remove({ id: 'gtceu:shaped/mv_miner' })
    event.remove({ id: 'gtceu:shaped/hv_miner' })
    event.remove({ id: 'gtceu:assembler/ev_large_miner' })
    event.remove({ id: 'gtceu:assembler/iv_large_miner' })
    event.remove({ id: 'gtceu:assembler/luv_large_miner' })
    event.remove({ id: 'gtceu:assembler/mv_fluid_drilling_rig' })
    event.remove({ id: 'gtceu:assembler/hv_fluid_drilling_rig' })
    event.remove({ id: 'gtceu:assembler/ev_fluid_drilling_rig' })

    event.remove({ id: 'projecte:philosophers_stone'})
    event.remove({ id: 'projecte:philosophers_stone_alt'})
    
});

MoreJSEvents.playerStartTrading((event) => {
    if (!event.player.stages.has('allow_trading')) {
        event.forEachOffers((o, i) => {
        o.disabled = true;
    });
    }
});

MoreJSEvents.villagerTrades((event) => {
    event.removeVanillaTrades();
    event.removeModdedTrades();
});

ServerEvents.loaded((event) => {
  if (event.server.persistentData.gameRules) return;

  event.server.gameRules.set('doTraderSpawning', false);
  event.server.gameRules.set('doWeatherCycle', false)
  event.server.persistentData.gameRules = true;
});