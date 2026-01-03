ServerEvents.recipes((event) => {
    
    event.shaped(
        Item.of('gregecore:acceleratedebf', 1),
        [
            ' A ',
            'DBD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/lv',
            B: 'botania:manasteel_ingot',
            C: 'minecraft:blast_furnace',
            D: 'gtceu:lv_voltage_coil',
            E: 'gtceu:lv_machine_hull'
        }
    )
});