ServerEvents.recipes((event) =>{ 
 event.shaped(
        Item.of('gtceu:voidcrystal', 1),
        [
            ' A ',
            'DBD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/hv',
            B: 'gtceu:uranium_ingot',
            C: 'gtceu:fine_steel_wire',
            D: 'gtceu:hv_voltage_coil',
            E: 'gtceu:hv_machine_hull'
        }
    )

    event.recipes.gtceu
        .voidcrystal('getvoidtouchedegg')
        .itemInputs(
            '4x kubejs:voidgoo',
            'minecraft:egg'

        )   
        .itemOutputs('kubejs:voidegg')
        .duration(100)
        .EUt(480)
        .circuit(1)

    event.recipes.gtceu
        .voidcrystal('getvoidwormhole')
        .itemInputs(
            '4x kubejs:voidgoo',
            'ae2:singularity'
        )   
        .itemOutputs('kubejs:voidhole')
        .duration(100)
        .EUt(480)
        .circuit(2)

    event.recipes.gtceu
        .voidcrystalincubator('getvoideggopened')
        .itemInputs(
            'kubejs:voideggopen'
        )
        .itemOutputs(
            'kubejs:voidorga'
        )
        .duration(2000)
        .EUt(480)
        .circuit(1)

    event.recipes.gtceu
        .voidcrystalincubator('getvoideggopenedfaster')
        .itemInputs(
            'kubejs:voideggopen',
            'kubejs:voidorgparts'
        )
        .itemOutputs(
            'kubejs:voidorga'
        )
        .duration(1000)
        .EUt(480)
        .circuit(2)
});