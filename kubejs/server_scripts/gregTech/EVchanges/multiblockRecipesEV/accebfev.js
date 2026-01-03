ServerEvents.recipes((event) => {
    
    event.shaped(
        Item.of('gregecore:giantacceleratedebf', 1),
        [
            ' A ',
            'DBD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/ev',
            B: 'botanicalextramachinery:malachite_ingot',
            C: 'minecraft:blast_furnace',
            D: 'gtceu:ev_voltage_coil',
            E: 'gtceu:ev_machine_hull'
        }
    )
});