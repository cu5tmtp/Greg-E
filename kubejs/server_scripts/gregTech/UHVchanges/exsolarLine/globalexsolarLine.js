ServerEvents.recipes((event) => {

    event.recipes.gtceu.assembler()
        .itemInputs(
            '2x gtceu:mellodium_rod',
            'gtceu:glass_plate',
            'gtceu:mellodium_plate'
        )
        .inputFluids(
            'gtceu:polytetrafluoroethylene 100'
        )
        .itemOutputs(
            'kubejs:mellodiumscience'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(150)

    event.recipes.gtceu.assembler()
        .itemInputs(
            '2x gtceu:prismalium_rod',
            'gtceu:small_prismalium_gear',
            'gtceu:prismalium_plate'
        )
        .inputFluids(
            'gtceu:polytetrafluoroethylene 100'
        )
        .itemOutputs(
            'kubejs:lasermining'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(150)

    event.recipes.gtceu.astrophage_charging('expensive')
        .inputFluids(
            'gtceu:astrophage_fuel 1'
        )
        .outputFluids(
            'gtceu:activated_astrophage_fuel 1'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(1)
        .circuit(1)

    event.recipes.gtceu.astrophage_charging('jupiterfreecharging')
        .inputFluids(
            'gtceu:astrophage_fuel 5'
        )
        .outputFluids(
            'gtceu:activated_astrophage_fuel 5'
        )
        .duration(1)
        .dimension('ad_extendra:jupiter')
        .circuit(2)

    event.shaped(
        Item.of('kubejs:prismaliumfilter', 1),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'gtceu:prismalium_foil',
            B: 'gtceu:prismalium_plate'
        }
    )

    event.shaped(
        Item.of('gtceu:uhv_astrophage_charger', 1),
        [
            'BAB',
            'CDC',
            'EEE'
        ],
        {
            A: '#gtceu:circuits/uhv',
            B: 'gtceu:uhv_electric_motor',
            C: 'gtceu:uhv_robot_arm',
            D: 'gtceu:uhv_machine_hull',
            E: 'kubejs:naquadahfilter'
        }
    )


})