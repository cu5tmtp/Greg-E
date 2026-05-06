ServerEvents.recipes((event) => {

     event.recipes.gtceu.compressor('getthemnetherriteblock')
        .itemInputs(
            '9x minecraft:netherite_ingot'
        )
        .itemOutputs(
            'minecraft:netherite_block'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)

    event.replaceInput(
        'minecraft:beacon',
        'minecraft:nether_star',
        'botania:spark'
    )

    const circuitsToAdd = [
        {item: 'kubejs:universal/lv', tag: '#gtceu:circuits/lv', tier: GTValues.VA[GTValues.LV]},
        {item: 'kubejs:universal/mv', tag: '#gtceu:circuits/mv', tier: GTValues.VA[GTValues.MV]},
        {item: 'kubejs:universal/hv', tag: '#gtceu:circuits/hv', tier: GTValues.VA[GTValues.HV]},
        {item: 'kubejs:universal/ev', tag: '#gtceu:circuits/ev', tier: GTValues.VA[GTValues.EV]},
        {item: 'kubejs:universal/iv', tag: '#gtceu:circuits/iv', tier: GTValues.VA[GTValues.IV]},
        {item: 'kubejs:universal/luv', tag: '#gtceu:circuits/luv', tier: GTValues.VA[GTValues.LuV]},
        {item: 'kubejs:universal/zpm', tag: '#gtceu:circuits/zpm', tier: GTValues.VA[GTValues.ZPM]},
        {item: 'kubejs:universal/uv', tag: '#gtceu:circuits/uv', tier: GTValues.VA[GTValues.UV]},
        {item: 'kubejs:universal/uhv', tag: '#gtceu:circuits/uhv', tier: GTValues.VA[GTValues.UHV]}
    ]

    circuitsToAdd.forEach(add => {
        event.recipes.gtceu.assembler()
            .itemInputs(
                add.tag
            )
            .itemOutputs(
                add.item
            )
            .EUt(add.tier)
            .duration(1)
            .circuit(24)
    })

    event.forEachRecipe({ input: 'minecraft:leather' }, recipe => {
        recipe.replaceInput('minecraft:leather', '#forge:leather')
    })

    event.recipes.gtceu.compressor('gettowerboreressenceggggg')
        .itemInputs(
            '8x twilightforest:towerwood'
        )
        .itemOutputs(
            'twilightforest:borer_essence'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(1)

    event.recipes.gtceu.compressor('armorshardddsfdfdf')
        .itemInputs(
            '64x twilightforest:mossy_underbrick'
        )
        .itemOutputs(
            'twilightforest:armor_shard'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(1)

})