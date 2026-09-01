ServerEvents.tags('item', (event) => {

    //remove the revive items & add the new ones
    event.remove('justdirethings:goo_revive_tier_1', 'minecraft:sugar')
    event.remove('justdirethings:goo_revive_tier_1', 'minecraft:rotten_flesh')
    event.add('justdirethings:goo_revive_tier_1', 'kubejs:euclid/euclid_circuit')

    event.remove('justdirethings:goo_revive_tier_2', 'minecraft:nether_wart')
    event.remove('justdirethings:goo_revive_tier_2', 'minecraft:blaze_powder')
    event.add('justdirethings:goo_revive_tier_2', 'kubejs:euclid/euclid_integrated')

    event.remove('justdirethings:goo_revive_tier_3', 'minecraft:ender_pearl')
    event.remove('justdirethings:goo_revive_tier_3', 'minecraft:chorus_fruit')
    event.add('justdirethings:goo_revive_tier_3', 'kubejs:euclid/euclid_computer')

    event.remove('justdirethings:goo_revive_tier_4', 'minecraft:sculk')
    event.remove('justdirethings:goo_revive_tier_4', 'minecraft:sculk_catalyst')
    event.add('justdirethings:goo_revive_tier_4', 'kubejs:euclid/euclid_mainframe')

})

ServerEvents.recipes((event) => {

    event.remove({ type: "justdirethings:goospread"})
    event.remove({ type: "justdirethings:goospread_tag"})
    event.remove({ type: "justdirethings:fluiddrop"})


    event.custom({
        type: 'justdirethings:goospread',
        craftingDuration: 400,
        id: 'kubejs:delirium_to_first_mat',
        input: { Name: 'gtceu:reinforced_delirium_block' },
        output: { Name: 'gtceu:bio_welded_reinforced_delirium_block' },
        tierRequirement: 1
    })
    .id('kubejs:delirium_to_first_mat')

    event.custom({
        type: 'justdirethings:goospread',
        craftingDuration: 400,
        id: 'kubejs:kamenium_to_second_mat',
        input: { Name: 'gtceu:reinforced_kamenium_block' },
        output: { Name: 'gtceu:bio_welded_reinforced_kamenium_block' },
        tierRequirement: 2
    })
    .id('kubejs:kamenium_to_second_mat')

    event.custom({
        type: 'justdirethings:goospread',
        craftingDuration: 400,
        id: 'kubejs:grympl_to_third_mat',
        input: { Name: 'gtceu:supergrympl_block' },
        output: { Name: 'gtceu:bio_welded_supergrympl_block' },
        tierRequirement: 3
    })
    .id('kubejs:grympl_to_third_mat')

    event.custom({
        type: 'justdirethings:goospread',
        craftingDuration: 400,
        id: 'kubejs:xynredar_to_fourth_mat',
        input: { Name: 'gtceu:xynredar_block' },
        output: { Name: 'gtceu:bio_welded_xynredar_block' },
        tierRequirement: 4
    })
    .id('kubejs:xynredar_to_fourth_mat')

    event.custom({
        type: 'justdirethings:fluiddrop',
        catalyst: 'kubejs:mirrorofkalandra',
        input: { 
            Name: 'minecraft:water'
        },
        output: {
            Name: 'justdirethings:polymorphic_fluid_block'
        },
        id: 'polymorficraft'
    }).id('polymorficraft')

    event.shapeless(Item.of('gtceu:bio_welded_reinforced_kamenium_ingot', 9),
        [
            'gtceu:bio_welded_reinforced_kamenium_block'
        ])

    event.recipes.gtceu.alloy_smelter()
        .itemInputs(
            'gtceu:bio_welded_reinforced_kamenium_block'
        )
        .notConsumable('gtceu:ingot_casting_mold')
        .itemOutputs(
            '9x gtceu:bio_welded_reinforced_kamenium_ingot'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(100)

    event.shapeless(Item.of('gtceu:bio_welded_reinforced_delirium_ingot', 9),
        [
            'gtceu:bio_welded_reinforced_delirium_block'
        ])

    event.recipes.gtceu.alloy_smelter()
        .itemInputs(
            'gtceu:bio_welded_reinforced_delirium_block'
        )
        .notConsumable('gtceu:ingot_casting_mold')
        .itemOutputs(
            '9x gtceu:bio_welded_reinforced_delirium_ingot'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(100)

    event.shapeless(Item.of('gtceu:bio_welded_supergrympl_ingot', 9),
        [
            'gtceu:bio_welded_supergrympl_block'
        ])

    event.recipes.gtceu.alloy_smelter()
        .itemInputs(
            'gtceu:bio_welded_supergrympl_block'
        )
        .notConsumable('gtceu:ingot_casting_mold')
        .itemOutputs(
            '9x gtceu:bio_welded_supergrympl_ingot'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(100)

    event.shapeless(Item.of('gtceu:bio_welded_xynredar_ingot', 9),
        [
            'gtceu:bio_welded_xynredar_block'
        ])

    event.recipes.gtceu.alloy_smelter()
        .itemInputs(
            'gtceu:bio_welded_xynredar_block'
        )
        .notConsumable('gtceu:ingot_casting_mold')
        .itemOutputs(
            '9x gtceu:bio_welded_xynredar_ingot'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(100)

    event.recipes.gtceu.wiremill()
        .itemInputs(
            'gtceu:bio_welded_reinforced_delirium_ingot'
        )
        .itemOutputs(
            '2x gtceu:bio_welded_reinforced_delirium_single_wire'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(100)
        .circuit(1)

    event.recipes.gtceu.extruder()
        .itemInputs(
            'gtceu:bio_welded_reinforced_kamenium_ingot'
        )
        .itemOutputs(
            '4x gtceu:bio_welded_reinforced_kamenium_ring'
        )
        .notConsumable(
            'gtceu:ring_extruder_mold'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)

    event.recipes.gtceu.bender()
        .itemInputs(
            'gtceu:bio_welded_supergrympl_ingot'
        )
        .itemOutputs(
            '4x gtceu:bio_welded_supergrympl_foil'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(100)
        .circuit(10)

    event.recipes.gtceu.wiremill()
        .itemInputs(
            'gtceu:bio_welded_xynredar_ingot'
        )
        .itemOutputs(
            '8x gtceu:fine_bio_welded_xynredar_wire'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(100)
        .circuit(1)

    event.remove({type: 'minecraft:smelting', output: '#forge:ingots/ferricore'})
    event.remove({type: 'minecraft:blasting', output: '#forge:ingots/ferricore'})
    event.recipes.gtceu.alloy_smelter()
        .itemInputs(
            'botania:manasteel_ingot',
            'gtceu:steel_ingot'
        )
        .itemOutputs(
            '2x justdirethings:ferricore_ingot'
        )
        .EUt(GTValues.VA[GTValues.LV])
        .duration(300)

    event.remove({type: 'minecraft:smelting', output: '#forge:ingots/blazegold'})
    event.remove({type: 'minecraft:blasting', output: '#forge:ingots/blazegold'})
    event.recipes.gtceu.alloy_smelter()
        .itemInputs(
            'kubejs:mushroomingot',
            'gtceu:aluminium_ingot'
        )
        .itemOutputs(
            '2x justdirethings:blazegold_ingot'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(300)

    event.recipes.gtceu.alloy_smelter()
        .itemInputs(
            'ad_astra:calorite_ingot',
            'gtceu:stainless_steel_ingot'
        )
        .itemOutputs(
            '2x justdirethings:celestigem'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(300)

    event.remove({type: 'minecraft:smelting', output: '#forge:ingots/eclipsealloy'})
    event.remove({type: 'minecraft:blasting', output: '#forge:ingots/eclipsealloy'})
    event.recipes.gtceu.alloy_smelter()
        .itemInputs(
            'botanicalextramachinery:shadow_ingot',
            'gtceu:titanium_ingot'
        )
        .itemOutputs(
            '2x justdirethings:eclipsealloy_ingot'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(300)

    event.remove({output: 'justdirethings:clickert1'})
    event.remove({output: 'justdirethings:clickert2'})
    event.remove({output: 'justdirethings:blockswappert1'})
    event.remove({output: 'justdirethings:blockswappert2'})
    event.remove({output: 'justdirethings:generatorfluidt1'})
    event.remove({output: 'justdirethings:paradoxmachine'})
    event.remove({output: 'justdirethings:generatort1'})
    event.remove({output: 'justdirethings:energytransmitter'})
    event.remove({output: 'justdirethings:time_crystal'})
    event.remove({input: 'justdirethings:time_crystal'})
    event.remove({output: 'justdirethings:fuel_canister'})
    event.remove({output: 'justdirethings:pocket_generator'})
    event.remove({output: 'justdirethings:fluid_canister'})
    event.remove({output: 'justdirethings:blazejet_wand'})
    event.remove({output: 'justdirethings:voidshift_wand'})
    event.remove({output: 'justdirethings:eclipsegate_wand'})
    event.remove({output: 'justdirethings:portal_gun'})
    event.remove({output: 'justdirethings:portal_gun_v2'})
    event.remove({output: 'justdirethings:polymorphic_wand'})
    event.remove({output: 'justdirethings:polymorphic_wand_v2'})
    event.remove({output: 'justdirethings:upgrade_flight'})

})