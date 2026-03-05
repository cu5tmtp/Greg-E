ServerEvents.recipes((event) => {
    
    event.shaped(
        Item.of('gtceu:mechanical_sap_tap', 1),
        [
            ' A ',
            'BCB',
            'EFE'
        ],
        {
            A: '#gtceu:circuits/lv',
            B: 'gtceu:lv_electric_motor',
            C: 'minecraft:oak_log',
            E: 'gtceu:lv_conveyor_module',
            F: 'gtceu:lv_machine_hull'
        }
    )

    event.recipes.gtceu
        .mechanical_sap_tap('free_glue') 
        .notConsumable('#forge:tools/knives')     
        .outputFluids('gtceu:glue 250')
        .circuit(1)
        .duration(200)

        event.recipes.gtceu
        .mechanical_sap_tap('free_rubber') 
        .notConsumable('#forge:tools/knives')     
        .outputFluids('gtceu:rubber 250')
        .circuit(2)
        .duration(200)
    
});