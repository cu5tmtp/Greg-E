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

})