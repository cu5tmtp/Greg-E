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

    event.remove({ id: 'ad_extendra:nasa_workbench/tier_5_rocket_from_nasa_workbench' })
    event.remove({ id: 'ad_extendra:nasa_workbench/tier_6_rocket_from_nasa_workbench' })
    event.remove({ id: 'ad_extendra:nasa_workbench/tier_7_rocket_from_nasa_workbench' })
    event.remove({ id: 'ad_extendra:nasa_workbench/tier_8_rocket_from_nasa_workbench' })
    event.remove({ id: 'ad_extendra:nasa_workbench/tier_9_rocket_from_nasa_workbench' })
    event.remove({ id: 'ad_extendra:nasa_workbench/tier_10_rocket_from_nasa_workbench' })
    event.remove({ id: 'ad_extendra:nasa_workbench/tier_11_rocket_from_nasa_workbench' })

    event.custom({
        "type": "ad_astra:nasa_workbench",
        "ingredients": [
        { "item": "ad_astra:rocket_nose_cone" },
        { "item": "ad_extendra:juperium_block" },
        { "item": "ad_extendra:juperium_block" },
        { "item": "kubejs:animated/guicompfour" },
        { "item": "ad_extendra:juperium_block" },
        { "item": "ad_extendra:juperium_block" },
        { "item": "ad_extendra:juperium_block" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_extendra:juperium_tank" },
        { "item": "ad_extendra:juperium_tank" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_extendra:juperium_engine" },
        { "item": "ad_astra:rocket_fin" }
        ],
        "result": {
        "count": 1,
        "id": "ad_extendra:tier_5_rocket"
        }
    })

    event.custom({
        "type": "ad_astra:nasa_workbench",
        "ingredients": [
        { "item": "ad_astra:rocket_nose_cone" },
        { "item": "ad_extendra:saturlyte_block" },
        { "item": "ad_extendra:saturlyte_block" },
        { "item": "kubejs:animated/guicompfour" },
        { "item": "ad_extendra:saturlyte_block" },
        { "item": "ad_extendra:saturlyte_block" },
        { "item": "ad_extendra:saturlyte_block" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_extendra:saturlyte_tank" },
        { "item": "ad_extendra:saturlyte_tank" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_extendra:saturlyte_engine" },
        { "item": "ad_astra:rocket_fin" }
        ],
        "result": {
        "count": 1,
        "id": "ad_extendra:tier_6_rocket"
        }
    })

    event.custom({
        "type": "ad_astra:nasa_workbench",
        "ingredients": [
        { "item": "ad_astra:rocket_nose_cone" },
        { "item": "ad_extendra:uranium_block" },
        { "item": "ad_extendra:uranium_block" },
        { "item": "kubejs:animated/guicompfour" },
        { "item": "ad_extendra:uranium_block" },
        { "item": "ad_extendra:uranium_block" },
        { "item": "ad_extendra:uranium_block" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_extendra:uranium_tank" },
        { "item": "ad_extendra:uranium_tank" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_extendra:uranium_engine" },
        { "item": "ad_astra:rocket_fin" }
        ],
        "result": {
        "count": 1,
        "id": "ad_extendra:tier_7_rocket"
        }
    })

    event.custom({
        "type": "ad_astra:nasa_workbench",
        "ingredients": [
        { "item": "ad_astra:rocket_nose_cone" },
        { "item": "ad_extendra:neptunium_block" },
        { "item": "ad_extendra:neptunium_block" },
        { "item": "kubejs:animated/guicompfour" },
        { "item": "ad_extendra:neptunium_block" },
        { "item": "ad_extendra:neptunium_block" },
        { "item": "ad_extendra:neptunium_block" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_extendra:neptunium_tank" },
        { "item": "ad_extendra:neptunium_tank" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_extendra:neptunium_engine" },
        { "item": "ad_astra:rocket_fin" }
        ],
        "result": {
        "count": 1,
        "id": "ad_extendra:tier_8_rocket"
        }
    })

    event.custom({
        "type": "ad_astra:nasa_workbench",
        "ingredients": [
        { "item": "ad_astra:rocket_nose_cone" },
        { "item": "ad_extendra:radium_block" },
        { "item": "ad_extendra:radium_block" },
        { "item": "kubejs:animated/guicompfour" },
        { "item": "ad_extendra:radium_block" },
        { "item": "ad_extendra:radium_block" },
        { "item": "ad_extendra:radium_block" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_extendra:radium_tank" },
        { "item": "ad_extendra:radium_tank" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_extendra:radium_engine" },
        { "item": "ad_astra:rocket_fin" }
        ],
        "result": {
        "count": 1,
        "id": "ad_extendra:tier_9_rocket"
        }
    })

    event.custom({
        "type": "ad_astra:nasa_workbench",
        "ingredients": [
        { "item": "ad_astra:rocket_nose_cone" },
        { "item": "ad_extendra:plutonium_block" },
        { "item": "ad_extendra:plutonium_block" },
        { "item": "kubejs:animated/guicompfour" },
        { "item": "ad_extendra:plutonium_block" },
        { "item": "ad_extendra:plutonium_block" },
        { "item": "ad_extendra:plutonium_block" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_extendra:plutonium_tank" },
        { "item": "ad_extendra:plutonium_tank" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_extendra:plutonium_engine" },
        { "item": "ad_astra:rocket_fin" }
        ],
        "result": {
        "count": 1,
        "id": "ad_extendra:tier_10_rocket"
        }
    })

    event.custom({
        "type": "ad_astra:nasa_workbench",
        "ingredients": [
        { "item": "ad_astra:rocket_nose_cone" },
        { "item": "ad_extendra:electrolyte_block" },
        { "item": "ad_extendra:electrolyte_block" },
        { "item": "kubejs:animated/guicompfour" },
        { "item": "ad_extendra:electrolyte_block" },
        { "item": "ad_extendra:electrolyte_block" },
        { "item": "ad_extendra:electrolyte_block" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_extendra:electrolyte_tank" },
        { "item": "ad_extendra:electrolyte_tank" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_astra:rocket_fin" },
        { "item": "ad_extendra:electrolyte_engine" },
        { "item": "ad_astra:rocket_fin" }
        ],
        "result": {
        "count": 1,
        "id": "ad_extendra:tier_11_rocket"
        }
    })

});