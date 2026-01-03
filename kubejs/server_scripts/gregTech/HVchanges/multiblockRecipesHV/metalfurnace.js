ServerEvents.recipes((event) =>{ 
 event.shaped(
        Item.of('gtceu:metalfurnace', 1),
        [
            ' A ',
            'DBD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/hv',
            B: 'minecraft:furnace',
            C: 'gtceu:fine_steel_wire',
            D: 'gtceu:hv_voltage_coil',
            E: 'gtceu:hv_machine_hull'
        }
    )

    event.recipes.gtceu
        .metalfurnace('metallurgingpu')
        .itemInputs(
            '6x gregecore:plutonium_hexafluoride_dust',
            'kubejs:li'
        )   
        .itemOutputs('kubejs:pu')
        .duration(250)
        .EUt(480)

    event.recipes.gtceu 
        .metalfurnace('getamalgamationli')
        .itemInputs(
            '1x gtceu:lithium_dust'
        )
        .inputFluids(
            'gtceu:mercury 3000'
        )
        .itemOutputs(
            'gregecore:lithium_amalgamation_dust'
        )
        .duration(50)
        .EUt(480)

    event.recipes.gtceu 
        .metalfurnace('getlithiumhydroxide')
        .itemInputs(
            '2x gtceu:lithium_dust'
        )
        .inputFluids(
            'gtceu:hydrogen 500'
        )
        .itemOutputs(
            'gregecore:lithium_hydroxide_dust'
        )
        .duration(50)
        .EUt(480)

});