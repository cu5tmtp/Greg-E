ServerEvents.recipes((event) => {

    event.recipes.gtceu.biocomponents()
        .itemInputs(
            '2x gtceu:bio_welded_supergrympl_foil',
            '6x gtceu:bio_welded_reinforced_delirium_single_wire'
        )
        .inputFluids(
            'justdirethings:polymorphic_fluid 1000'
        )
        .itemOutputs(
            '4x kubejs:bioresistor'
        )
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(300)

    event.recipes.gtceu.biocomponents()
        .itemInputs(
            '4x gtceu:fine_bio_welded_xynredar_wire',
            '2x gtceu:bio_welded_reinforced_kamenium_ring'
        )
        .inputFluids(
            'justdirethings:polymorphic_fluid 1000'
        )
        .itemOutputs(
            '4x kubejs:biocapacitor'
        )
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(300)

})