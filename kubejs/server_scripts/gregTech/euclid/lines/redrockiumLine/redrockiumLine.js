ServerEvents.recipes((event) => {

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            '4x minecraft:redstone_block'
        )
        .itemOutputs(
            'gtceu:hot_high_temp_redstone_ingot'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1000)
        .blastFurnaceTemp(10000)

    event.recipes.gtceu.specialpress()
        .itemInputs(
            'gtceu:hot_high_temp_redstone_ingot'
        )
        .itemOutputs(
            'gtceu:high_temp_redstone_ingot'
        )
        .chancedOutput('gtceu:redrockium_dust', 2500, 0)
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(250)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            '4x gtceu:redrockium_dust'
        )
        .itemOutputs(
            'gtceu:hot_redrockium_ingot'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1000)
        .blastFurnaceTemp(10000)

    event.recipes.gtceu.vacuum_freezer()
        .itemInputs(
            'gtceu:hot_redrockium_ingot'
        )
        .itemOutputs(
            'gtceu:redrockium_ingot'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(300)

    event.recipes.gtceu.wiremill()
        .itemInputs(
            'gtceu:redrockium_ingot'
        )
        .itemOutputs(
            '2x gtceu:redrockium_single_wire'
        )
        .circuit(1)
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            '2x gtceu:high_temp_redstone_ingot'
        )
        .itemOutputs(
            'gtceu:hot_redsediment_ingot'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(1000)
        .blastFurnaceTemp(10000)

    event.recipes.gtceu.vacuum_freezer()
        .itemInputs(
            'gtceu:hot_redsediment_ingot'
        )
        .itemOutputs(
            'gtceu:redsediment_ingot'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(250)

    event.recipes.gtceu.extractor()
        .itemInputs(
            '4x gtceu:redsediment_ingot'
        )
        .outputFluids(
            'gtceu:redsediment 500'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)

    event.recipes.gtceu.fluid_solidifier()
        .inputFluids(
            'gtceu:redsediment 500'
        )
        .itemOutputs(
            'kubejs:redsedimentboard'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(100)
        .notConsumable('kubejs:latgriummold')

})