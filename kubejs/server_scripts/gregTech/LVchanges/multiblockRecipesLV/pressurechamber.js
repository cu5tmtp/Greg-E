ServerEvents.recipes(event => {

    event.shaped(
        Item.of('gregecore:pressurechamber', 1),
        [
            'ACA',
            'DBD',
            'ACA'
        ],
        {
            A: 'gtceu:steel_normal_fluid_pipe',
            B: 'gtceu:lv_machine_hull',
            C: 'gtceu:lv_electric_pump',
            D: '#gtceu:circuits/lv'
        }
    )
    
    event.shaped(
        Item.of('gregecore:pressure_input_machine', 1),
        [
            'AAA',
            'CBC',
            'AAA'
        ],
        {
            A: 'gtceu:steel_normal_fluid_pipe',
            B: 'gtceu:lv_machine_hull',
            C: '#gtceu:circuits/lv'
        }
    )

    event.recipes.gtceu.pressuring()
        .itemInputs(
            '4x #forge:crops',
        )
        .itemOutputs(
            '2x gtceu:plant_ball'
        )
        .addData('pa', 15)
        .duration(400)

    event.recipes.gtceu.pressuring()
        .itemInputs(
            '8x powah:dielectric_paste'
        )
        .itemOutputs(
            '3x gtceu:dielectric_ingot'
        )
        .notConsumable('gtceu:ingot_casting_mold')
        .duration(400)
        .addData('pa', 20)

    event.recipes.gtceu.pressuring()
        .itemInputs(
            '8x powah:dielectric_paste',
            '2x gtceu:titanium_dust',
            '4x gtceu:stainless_steel_dust'
        )
        .itemOutputs(
            '9x gtceu:refined_dielectric_dust'
        )
        .duration(600)
        .addData('pa', 45)

    event.recipes.gtceu.pressuring()
        .itemInputs(
            '6x gtceu:magnesium_dust',
            '2x gtceu:molybdenum_dust',
            '2x gtceu:pyrostellit_dust',
            '4x gtceu:chromium_dust',
            '4x minecraft:glowstone_dust'
        )
        .itemOutputs(
            '21x gtceu:aethelosil_dust'
        )
        .duration(600)
        .addData('pa', 50)

    event.recipes.gtceu.pressuring()
        .itemInputs(
            '2x gtceu:tin_dust',
            '8x gtceu:copper_dust',
            '2x gtceu:gold_dust'
        )
        .itemOutputs(
            '18x gtceu:solar_bronze_dust'
        )
        .duration(400)
        .addData('pa', 10)

    event.recipes.gtceu.pressuring()
        .itemInputs(
            '6x minecraft:blaze_powder',
            '2x gregecore:plutonium_hexafluoride_dust',
            '2x gtceu:uranium_dust',
            '4x gtceu:chromium_dust'
        )
        .itemOutputs(
            '18x gtceu:pyrostellit_dust'
        )
        .duration(400)
        .addData('pa', 15)

    event.recipes.gtceu.pressuring()
        .itemInputs(
            '4x gtceu:platinum_ingot',
            '4x ad_astra:ostrum_ingot',
            '4x ad_astra:calorite_ingot',
            '4x ad_astra:desh_ingot'
        )
        .itemOutputs(
            'kubejs:stoneofhorus'
        )
        .duration(1000)
        .addData('pa', 80)

    event.recipes.gtceu.pressuring()
        .itemInputs(
            '4x ad_extendra:uranium_ingot',
            '4x ad_extendra:neptunium_ingot',
            '4x ad_extendra:juperium_ingot',
            '4x ad_extendra:saturlyte_ingot',
            '4x ad_extendra:electrolyte_ingot'
        )
        .itemOutputs(
            'kubejs:charmofguilliman'
        )
        .duration(1000)
        .addData('pa', 80)

    event.recipes.gtceu.pressuring()
        .itemInputs(
            '4x gtceu:witherite_wire_single_wire',
            '4x gtceu:abyssal_wire_single_wire',
            '4x gtceu:ancient_metal_single_wire',
            '4x gtceu:ignitium_wire_single_wire'
        )
        .itemOutputs(
            'kubejs:eyeofpride'
        )
        .duration(1000)
        .addData('pa', 50)

    event.recipes.gtceu.pressuring()
        .itemInputs(
            '4x #grege:powcell',
            '4x gtceu:enderium_wire_single_wire',
            '4x gtceu:cursium_wire_single_wire',
            '4x gtceu:storm_wire_single_wire'
        )
        .itemOutputs(
            'kubejs:eyeofsin'
        )
        .duration(1000)
        .addData('pa', 50)

    event.recipes.gtceu.pressuring()
        .itemInputs(
            '256x minecraft:dragon_breath',
            'minecraft:egg'
        )
        .itemOutputs(
            'minecraft:dragon_egg'
        )
        .duration(1000)
        .addData('pa', 80)

    event.recipes.gtceu.pressuring()
        .itemInputs(
            'botania:cosmetic_tiny_potato_mask',
            '16x ad_astra:ostrum_ingot'
        )
        .itemOutputs(
            'kubejs:burialmask'
        )
        .duration(1000)
        .addData('pa', 15)

    event.recipes.gtceu.pressuring()
        .itemInputs(
            'twilightforest:snow_queen_trophy',
            'twilightforest:ur_ghast_trophy',
            'twilightforest:alpha_yeti_trophy',
            '16x gtceu:pixie_dust_dust'
        )
        .itemOutputs(
            'twilightforest:twilight_portal_miniature_structure'
        )
        .duration(1000)
        .addData('pa', 15)

});