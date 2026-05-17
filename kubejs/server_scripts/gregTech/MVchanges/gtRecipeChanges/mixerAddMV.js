ServerEvents.recipes((event) => {

    event.recipes.gtceu.mixer('craftalchfluid')
        .itemInputs(
            '20x projecte:low_covalence_dust',
            '20x projecte:medium_covalence_dust',
            '20x projecte:high_covalence_dust'
        )
        .inputFluids(
            'minecraft:water 3000'
        )
        .outputFluids(
            'kubejs:alchessence 3000'
        )
        .duration(200)
        .EUt(80)

    event.recipes.gtceu.mixer('getfluxcrystalgetget')
        .itemInputs(
            'ae2:charged_certus_quartz_crystal',
            'minecraft:redstone',
            'minecraft:quartz'
        )
        .inputFluids(
            'minecraft:water 100'
        )
        .itemOutputs(
            'ae2:fluix_crystal'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(1)

    event.recipes.gtceu.mixer('getfluxcrystalgetgetf')
        .itemInputs(
            '16x ae2:charged_certus_quartz_crystal',
            '16x minecraft:redstone',
            '16x minecraft:quartz'
        )
        .inputFluids(
            'minecraft:water 1600'
        )
        .itemOutputs(
            '16x ae2:fluix_crystal'
        )
        .duration(1200)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(16)
        
})