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
        .itemInputs('kubejs:cm', 'kubejs:c')   
        .itemOutputs('kubejs:no')
        .duration(100)
        .EUt(480)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu
        .linearaccel('radiatethatbih')
        .itemInputs('kubejs:voiddust')   
        .chancedOutput('gtceu:tiny_uranium_dust', 500, 0)
        .chancedOutput('gtceu:tiny_uranium_dust', 250, 0)
        .duration(400)
        .EUt(480)
        .cleanroom(CleanroomType.CLEANROOM)
});