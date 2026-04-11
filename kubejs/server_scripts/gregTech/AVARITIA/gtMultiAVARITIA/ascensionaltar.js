ServerEvents.recipes((event) => {

    event.remove('avaritia:infinity_helmet')
    event.recipes.gtceu.ascention_altar_donation("infinityhelm")
        .itemInputs(
            '19x avaritia:infinity_ingot',
            '2x avaritia:infinity_catalyst',
            '15x gtceu:neutronium_ingot'
        )
        .itemOutputs(
            'avaritia:infinity_helmet'
        )
        .addData('tome', 5)
        .duration(400)
        .circuit(5)

    event.remove('avaritia:infinity_pants')
    event.recipes.gtceu.ascention_altar_donation("infinitypants")
        .itemInputs(
            '16x avaritia:infinity_ingot',
            '2x avaritia:infinity_catalyst',
            '2x avaritia:crystal_matrix_ingot',
            '43x gtceu:neutronium_ingot'
        )
        .itemOutputs(
            'avaritia:infinity_pants'
        )
        .addData('tome', 4)
        .duration(400)
        .circuit(4)

    event.remove('avaritia:infinity_chestplate')
    event.recipes.gtceu.ascention_altar_donation("infinitychestplate")
        .itemInputs(
            '24x avaritia:infinity_ingot',
            '1x avaritia:crystal_matrix',
            '31x gtceu:neutronium_ingot'
        )
        .itemOutputs(
            'avaritia:infinity_chestplate'
        )
        .addData('tome', 2)
        .duration(400)
        .circuit(2)

    event.remove('avaritia:infinity_boots')
    event.recipes.gtceu.ascention_altar_donation("infinityboots")
        .itemInputs(
            '10x avaritia:infinity_ingot',
            '32x gtceu:neutronium_ingot'
        )
        .itemOutputs(
            'avaritia:infinity_boots'
        )
        .addData('tome', 3)
        .duration(400)
        .circuit(3)

    event.remove('avaritia:infinity_sword')
    event.recipes.gtceu.ascention_altar_donation("infinityswordgettttt")
        .itemInputs(
            '15x avaritia:infinity_ingot',
            '2x gtceu:neutronium_ingot',
            '1x avaritia:infinity_catalyst',
            '5x avaritia:crystal_matrix',
            '8x avaritia:crystal_matrix_ingot'
        )
        .itemOutputs(
            Item.of('avaritia:infinity_sword', '{mode:{}}')
        )
        .addData('tome', 1)
        .duration(400)
        .circuit(1)

});