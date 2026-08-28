ServerEvents.recipes((event) => {

    event.recipes.gtceu.large_chemical_reactor()
        .itemInputs(
            'gtceu:raw_xynred'
        )
        .inputFluids(
            'gtceu:hydrofluoric_acid 750'
        )
        .outputFluids(
            'gtceu:xynred 1250'
        )
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(180)

    event.recipes.gtceu.large_chemical_reactor()
        .inputFluids(
            'gtceu:xynred 1250',
            'minecraft:lava 100000'
        )
        .outputFluids(
            'gtceu:xynred_lava 1000'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(250)

    event.recipes.gtceu.large_chemical_reactor()
        .itemInputs(
            '8x minecraft:bone',
            '8x minecraft:ghast_tear',
            '8x minecraft:blaze_rod'
        )
        .inputFluids(
            'gtceu:xynred_lava 1250'
        )
        .outputFluids(
            'gtceu:xynred_mob 1000'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(250)

    event.recipes.gtceu.large_chemical_reactor()
        .inputFluids(
            'gtceu:xynred_mob 1200',
            'minecraft:water 10000'
        )
        .outputFluids(
            'gtceu:xynred_water 750'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(300)

    event.recipes.gtceu.large_chemical_reactor()
        .inputFluids(
            'gtceu:xynred_mob 1200',
            'minecraft:water 10000'
        )
        .outputFluids(
            'gtceu:xynred_water 750'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(300)

    event.recipes.gtceu.centrifuge()
        .inputFluids(
            'gtceu:xynred_water 1000'
        )
        .itemOutputs(
            '3x gtceu:xynredder_dust',
            '2x gtceu:xynredar_dust'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(300)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:xynredder_dust'
        )
        .itemOutputs(
            'gtceu:xynredder_ingot'
        )
        .blastFurnaceTemp(5600)
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(300)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:xynredar_dust'
        )
        .itemOutputs(
            'gtceu:xynredar_ingot'
        )
        .blastFurnaceTemp(5600)
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(300)

    event.recipes.gtceu.wiremill()
        .itemInputs(
            'gtceu:xynredder_ingot'
        )
        .itemOutputs(
            '8x gtceu:fine_xynredder_wire'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(300)
        .circuit(3)

    event.recipes.gtceu.compressor()
        .itemInputs(
            '9x gtceu:xynredar_ingot'
        )
        .itemOutputs(
            'gtceu:xynredar_block'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(200)

})