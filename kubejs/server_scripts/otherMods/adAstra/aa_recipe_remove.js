ServerEvents.recipes((event) => {

    //Remove unvanted recipes from Ad Astra
    
    event.remove({ id: 'ad_astra:compressing/iron_plate_from_compressing_iron_ingot' })
    event.remove({ id: 'ad_astra:compressing/iron_plate_from_compressing_iron_block' })
    event.remove({ id: 'ad_astra:compressing/steel_plate_from_compressing_steel_ingots' })
    event.remove({ id: 'ad_astra:compressing/steel_plate_from_compressing_steel_blocks' })
    event.remove({ id: 'ad_astra:iron_rod' })
    event.remove({ id: 'ad_astra:steel_rod' })
    event.remove({ id: 'ad_astra:alloying/steel_ingot_from_alloying_iron_ingot_and_coals' })
    event.remove({ id: 'ad_astra:coal_generator' }),
    event.remove({ id: 'ad_astra:oxygen_loader' })

});