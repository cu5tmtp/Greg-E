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
    event.remove({ id: 'ad_astra:compressor' }),

    event.remove({ id: 'ad_extendra:nasa_workbench/tier_5_rocket_from_nasa_workbench' })
    event.remove({ id: 'ad_extendra:nasa_workbench/tier_6_rocket_from_nasa_workbench' })
    event.remove({ id: 'ad_extendra:nasa_workbench/tier_7_rocket_from_nasa_workbench' })
    event.remove({ id: 'ad_extendra:nasa_workbench/tier_8_rocket_from_nasa_workbench' })
    event.remove({ id: 'ad_extendra:nasa_workbench/tier_9_rocket_from_nasa_workbench' })
    event.remove({ id: 'ad_extendra:nasa_workbench/tier_10_rocket_from_nasa_workbench' })
    event.remove({ id: 'ad_extendra:nasa_workbench/tier_11_rocket_from_nasa_workbench' })

    const tankReplaceAdAstra = [
        {output: 'steel'},
        {output: 'desh'},
        {output: 'ostrum'},
        {output: 'calorite'}
    ]

    tankReplaceAdAstra.forEach( item => {

        event.replaceInput(
            `ad_astra:${item.output}_tank`,
            'ad_astra:steel_rod',
            'gtceu:steel_rod'
        )

    })

    const tankReplaceAdExtendra = [
        {output: 'juperium'},
        {output: 'saturlyte'},
        {output: 'uranium'},
        {output: 'neptunium'},
        {output: 'radium'},
        {output: 'desh'},
        {output: 'plutonium'},
        {output: 'desh'},
        {output: 'electrolyte'},
    ]

    tankReplaceAdExtendra.forEach( item => {

        event.replaceInput(
            `ad_extendra:${item.output}_tank`,
            'ad_astra:steel_rod',
            'gtceu:steel_rod'
        )

    })

    const enigneReplaceAdAstra = [
        {output: 'steel'},
        {output: 'desh'},
        {output: 'ostrum'},
        {output: 'calorite'}
    ]

    enigneReplaceAdAstra.forEach( item => {

        event.replaceInput(
            `ad_astra:${item.output}_engine`,
            'ad_astra:fan',
            'gtceu:steel_rotor'
        )

    })

    const enigneReplaceAdExtendra = [
        {output: 'juperium'},
        {output: 'saturlyte'},
        {output: 'uranium'},
        {output: 'neptunium'},
        {output: 'radium'},
        {output: 'desh'},
        {output: 'plutonium'},
        {output: 'desh'},
        {output: 'electrolyte'},
    ]

    enigneReplaceAdExtendra.forEach( item => {

        event.replaceInput(
            `ad_extendra:${item.output}_engine`,
            'ad_astra:fan',
            'gtceu:steel_rotor'
        )

    })

    const plateblockReplaceAdExtendra = [
        {output: 'juperium'},
        {output: 'saturlyte'},
        {output: 'uranium'},
        {output: 'neptunium'},
        {output: 'radium'},
        {output: 'desh'},
        {output: 'plutonium'},
        {output: 'desh'},
        {output: 'electrolyte'}
    ]

    plateblockReplaceAdExtendra.forEach( item => {

        event.replaceInput(
            `ad_extendra:${item.output}_plateblock`,
            'ad_astra:steel_rod',
            'gtceu:steel_rod'
        )

    })

    const plateblockReplaceAdAstra = [
        {output: 'iron'},
        {output: 'steel'},
        {output: 'desh'},
        {output: 'ostrum'},
        {output: 'calorite'}
    ]

    plateblockReplaceAdAstra.forEach( item => {

        event.replaceInput(
            `ad_astra:${item.output}_plateblock`,
            'ad_astra:steel_rod',
            'gtceu:steel_rod'
        )

    })

    event.replaceInput(
        'ad_astra:gas_tank',
        'ad_astra:iron_rod',
        'gtceu:iron_rod'
    )

    event.replaceInput(
        'ad_astra:large_gas_tank',
        'ad_astra:steel_rod',
        'gtceu:steel_rod'
    )

    event.replaceInput(
        'ad_astra:oxygen_gear',
        'ad_astra:steel_rod',
        'gtceu:steel_rod'
    )

    event.replaceInput(
        'ad_astra:engine_frame',
        'ad_astra:steel_rod',
        'gtceu:steel_rod'
    )

    event.replaceInput(
        'ad_astra:fan',
        'ad_astra:steel_rod',
        'gtceu:steel_rod'
    )

    event.replaceInput(
        'ad_astra:nasa_workbench',
        'minecraft:crafting_table',
        '#gtceu:circuits/hv'
    )

    event.remove({ id: "ad_astra:oxygen_loading/oxygen_from_oxygen_loading_water"})

    event.forEachRecipe({ type: 'ad_astra:compressing' }, recipe => {
        let json = recipe.json
        let input = json.get('ingredient')
        let output = json.get('result')

        let inputStr = Ingredient.of(input).toJson().toString()

        if (inputStr.includes('block')) {
            return
        }

        if (output && output.has('id')) {
            let outputItem = output.get('id').getAsString()
            let recipeId = recipe.getId().toString()

            event.recipes.gtceu.bender(recipeId + '_converted')
                .itemInputs(input)
                .itemOutputs(outputItem)
                .circuit(1)
                .duration(100)
                .EUt(GTValues.VA[GTValues.HV])
        }
    })

    const colors = [
        'white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 
        'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'
    ]

    colors.forEach(color => {
        event.replaceInput(
            `ad_astra:${color}_flag`,
            'ad_astra:steel_rod',
            'gtceu:steel_rod'
        )
    })

    event.remove({ type: 'ad_astra:compressing' })

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