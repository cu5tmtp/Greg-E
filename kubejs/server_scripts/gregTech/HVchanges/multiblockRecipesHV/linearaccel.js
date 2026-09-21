ServerEvents.recipes((event) =>{ 
 event.shaped(
        Item.of('gtceu:linearaccel', 1),
        [
            ' A ',
            'DBD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/hv',
            B: 'minecraft:target',
            C: 'gtceu:fine_steel_wire',
            D: 'gtceu:hv_voltage_coil',
            E: 'gtceu:hv_machine_hull'
        }
    )

    event.recipes.gtceu
        .linearaccel('yayfinally')
        .itemInputs(
            'gtceu:curiuum_dust', 
            'gtceu:carbon_dust'
        )   
        .itemOutputs(
            'gregecore:small_nobelium_dust'
        )
        .duration(100)
        .EUt(480)
        .cleanroom(CleanroomType.CLEANROOM)

});