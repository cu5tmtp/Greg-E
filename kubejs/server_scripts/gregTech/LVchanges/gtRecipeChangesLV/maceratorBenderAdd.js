ServerEvents.recipes((event) => {

    event.recipes.gtceu.bender('manasteelfoil')
        .itemInputs(
            'botania:manasteel_ingot'
        )
        .itemOutputs(
            '4x kubejs:manasteelfoil'
        )
        .duration(70)
        .EUt(24)
        .circuit(10)

    event.recipes.gtceu.macerator('getfluixdust')
        .itemInputs(
            'ae2:fluix_crystal'
        )
        .itemOutputs(
            'ae2:fluix_dust'
        )
        .duration(50)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.macerator('getcertusdustmacertaion')
        .itemInputs(
            'ae2:certus_quartz_crystal'
        )
        .itemOutputs(
            'ae2:certus_quartz_dust'
        )
        .duration(50)
        .EUt(GTValues.VA[GTValues.LV])

    
})