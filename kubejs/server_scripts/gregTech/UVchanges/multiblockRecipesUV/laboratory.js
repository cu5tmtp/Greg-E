ServerEvents.recipes((event) => {

        event.shaped(
        Item.of('gtceu:laboratory', 1),
        [
            ' A ',
            'ABA',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/uv',
            B: 'kubejs:witchlabflask',
            C: 'gtceu:advanced_computer_casing',
            E: 'gtceu:uv_machine_hull'
        }
    )

    event.recipes.gtceu.laboratory('researchnewcells')
    .itemInputs(
        '8x gtceu:stem_cells'
    )
    .itemOutputs(
        'kubejs:bacterias/simplebacteria13'
    )
    .EUt(GTValues.VA[GTValues.UV])
    .duration(200)

    event.recipes.gtceu.laboratory('researchnbestbacteria')
    .itemInputs(
        'gregecore:speed_bacteria',
        'gregecore:energy_bacteria',
        'gregecore:parallel_bacteria',
    )
    .itemOutputs(
        'gregecore:ultimate_bacteria',
    )
    .EUt(GTValues.VA[GTValues.UV])
    .duration(200)

    

});