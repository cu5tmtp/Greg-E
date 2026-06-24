ServerEvents.recipes(event => {

    event.replaceInput( 
        {id: "gtceu:assembler/smd_diode"},
        "gtceu:fine_platinum_wire",
        "gtceu:fine_titanium_wire"
    )

    event.remove({id: "gtceu:wiremill/mill_titaniumingot_to_fine_wire"})
    event.recipes.gtceu.wiremill("gettitaniumwireeee")
        .itemInputs(
            'gtceu:titanium_ingot'
        )
        .itemOutputs(
            "8x gtceu:fine_titanium_wire"
        )
        .circuit(3)
        .duration(160)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shaped(
        Item.of('gtceu:cleaning_maintenance_hatch', 1),
        [
            'AEA',
            'DCD',
            'BAB'
        ],
        {
            A: '#gtceu:circuits/luv',
            B: 'gregecore:superelement27_single_wire',
            C: 'gtceu:luv_machine_hull',
            D: 'gtceu:luv_robot_arm',
            E: 'gtceu:auto_maintenance_hatch'
        }
    )

    event.shaped(
        Item.of('gregecore:dimension_maintenance_hatch', 1),
        [
            'AEA',
            'DCD',
            'BAB'
        ],
        {
            A: '#gtceu:circuits/luv',
            B: 'gregecore:superelement27_single_wire',
            C: 'gregecore:dimensional_filter_casing',
            D: 'gtceu:luv_robot_arm',
            E: 'gtceu:cleaning_maintenance_hatch'
        }
    )

})