ServerEvents.recipes((event) =>{ 
    event.recipes.gtceu.extractor('getivcef')
        .itemInputs(
            '#gtceu:circuits/iv'
        )
        .outputFluids(
            'kubejs:ivcas 1000'
        )
        .duration(500)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.specmetheat('gethotcloggrum')
        .itemInputs(
            'undergarden:cloggrum_ingot'
        )
        .inputFluids(
            'kubejs:acidinfusedlava 1000'
        )
        .itemOutputs(
            'kubejs:hotcloggrum'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)

    event.recipes.gtceu.specmetheat('gethotfrosteel')
        .itemInputs(
            'undergarden:froststeel_ingot'
        )
        .inputFluids(
            'kubejs:acidinfusedlava 1000'
        )
        .itemOutputs(
            'kubejs:hotfroststeel'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)

    event.recipes.gtceu.anvilf('getpurefroststeel')
        .itemInputs(
            'kubejs:hotfroststeel'
        )
        .inputFluids(
            'kubejs:acidinfusedlava 1000'
        )
        .itemOutputs(
            'kubejs:purefroststeel',
            'gtceu:ash_dust',
            'gtceu:stone_dust'
        )
        .duration(200)

    event.recipes.gtceu.anvilf('getpurecloggrum')
        .itemInputs(
            'kubejs:hotcloggrum'
        )
        .inputFluids(
            'kubejs:acidinfusedlava 1000'
        )
        .itemOutputs(
            'kubejs:purecloggrum',
            'gtceu:ash_dust',
            'gtceu:stone_dust'
        )
        .duration(200)

})