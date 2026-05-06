ServerEvents.recipes(event => {

    const recipes = [
        { id: 'large_solidifier', circuit: '#gtceu:circuits/iv' },
        { id: 'large_ore_washer', circuit: '#gtceu:circuits/iv' },
        { id: 'large_distillery', circuit: '#gtceu:circuits/iv' },
        { id: 'large_extractor', circuit: '#gtceu:circuits/iv' },
        { id: 'large_autoclave', circuit: '#gtceu:circuits/iv' },
        { id: 'large_extruder', circuit: '#gtceu:circuits/iv' },
        { id: 'large_wiremill', circuit: '#gtceu:circuits/iv' },
        { id: 'large_material_press', circuit: '#gtceu:circuits/iv' },
        { id: 'large_assembler', circuit: '#gtceu:circuits/iv' },
        { id: 'large_circuit_assembler', circuit: '#gtceu:circuits/iv' },
        { id: 'large_sifter', circuit: '#gtceu:circuits/iv' },
        { id: 'large_centrifuge', circuit: '#gtceu:circuits/iv' },
        { id: 'large_electromagnet', circuit: '#gtceu:circuits/iv' },
        { id: 'large_electrolyzer', circuit: '#gtceu:circuits/iv' },
        { id: 'large_macerator', circuit: '#gtceu:circuits/iv' },
        { id: 'large_mixer', circuit: '#gtceu:circuits/iv' },
        { id: 'large_engraver', circuit: '#gtceu:circuits/iv' },
        { id: 'large_cutter', circuit: '#gtceu:circuits/iv' },
        { id: 'large_arc_smelter', circuit: '#gtceu:circuits/iv' },
        { id: 'large_cutter', circuit: '#gtceu:circuits/iv' },
        { id: 'large_brewer', circuit: '#gtceu:circuits/iv' },

    ]

    recipes.forEach(recipe => {
        event.replaceInput(
            `gtceu:shaped/${recipe.id}`,
            recipe.circuit,
            "#gtceu:circuits/luv"
        )
    })

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

})