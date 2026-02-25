ServerEvents.recipes((event) => {

  event.replaceInput(
    'sanguine_networks:virtual_sacrificer',
    'minecraft:obsidian',
    '#gtceu:circuits/zpm'
  )


  event.custom({
    type: 'sanguine_networks:catalyst',
    catalyst: {
      item: 'kubejs:animated/zpmalloy',
    },
    multiplier: 25,
    uses: -1,
  });
});


//remove annoying log errors
ServerEvents.recipes(event => {
    
    event.remove({id: 'sanguine_networks:blood/creeper'})
    event.remove({id: 'sanguine_networks:blood/witch'})
    event.remove({id: 'sanguine_networks:blood/blaze'})
    event.remove({id: 'sanguine_networks:blood/polar_bear'})
    event.remove({id: 'sanguine_networks:blood/hoglin'})
    event.remove({id: 'sanguine_networks:blood/sheep'})
    event.remove({id: 'sanguine_networks:blood/skeleton'})
    event.remove({id: 'sanguine_networks:blood/zombie'})
    event.remove({id: 'sanguine_networks:blood/rabbit'})
    event.remove({id: 'sanguine_networks:blood/iron_golem'})
    event.remove({id: 'sanguine_networks:blood/squid'})
    event.remove({id: 'sanguine_networks:blood/shulker'})
    event.remove({id: 'sanguine_networks:blood/magma_cube'})
    event.remove({id: 'sanguine_networks:blood/enderman'})
    event.remove({id: 'sanguine_networks:blood/pig'})
    event.remove({id: 'sanguine_networks:blood/ender_dragon'})
    event.remove({id: 'sanguine_networks:blood/zombified_piglin'})
    event.remove({id: 'sanguine_networks:blood/cow'})
    event.remove({id: 'sanguine_networks:blood/mooshroom'})
    event.remove({id: 'sanguine_networks:blood/evoker'})
    event.remove({id: 'sanguine_networks:blood/vindicator'})
    event.remove({id: 'sanguine_networks:blood/slime'})
    event.remove({id: 'sanguine_networks:blood/warden'})
    event.remove({id: 'sanguine_networks:blood/ghast'})
    event.remove({id: 'sanguine_networks:blood/glow_squid'})
    event.remove({id: 'sanguine_networks:blood/snow_golem'})
    event.remove({id: 'sanguine_networks:blood/guardian'})
    event.remove({id: 'sanguine_networks:blood/cod'})
    event.remove({id: 'sanguine_networks:blood/spider'})
    event.remove({id: 'sanguine_networks:blood/drowned'})
    event.remove({id: 'sanguine_networks:blood/phantom'})
    event.remove({id: 'sanguine_networks:blood/elder_guardian'})
    
})