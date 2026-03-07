ServerEvents.recipes((event) => {
    
    event.shaped(
        Item.of('gtceu:evaporator', 1),
        [
            ' A ',
            'DBD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/lv',
            B: 'minecraft:water_bucket',
            C: 'gtceu:lv_conveyor_module',
            D: 'gtceu:lv_electric_pump',
            E: 'gtceu:lv_machine_hull'
        }
    )

    event.recipes.gtceu
        .evaporator('salt_dust_from_water') 
        .inputFluids('minecraft:water 500')    
        .itemOutputs('gtceu:salt_dust')
        .circuit(1)
        .duration(50)
        .EUt(15)
});