ServerEvents.recipes((event) => {

    event.shaped(
        Item.of('gtceu:runecarver', 1),
        [
            ' A ',
            'DBD',
            'ECE'
        ],
        {
            A: '#gtceu:circuits/zpm',
            B: 'gtceu:red_glass_lens',
            C: 'gtceu:luv_machine_hull',
            D: 'gtceu:laser_safe_engraving_casing',
            E: 'gtceu:shock_proof_cutting_casing'
        }
    )

    event.recipes.gtceu.runecarver('activateeeeeeeee')
        .itemInputs(
            'kubejs:rune'
        )
        .itemOutputs(
            'kubejs:activatedrune'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ZPM])
        .circuit(1)

})