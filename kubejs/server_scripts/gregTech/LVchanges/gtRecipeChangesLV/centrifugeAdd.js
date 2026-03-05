ServerEvents.recipes((event) => {

    event.recipes.gtceu.centrifuge('commonearth_sulfur')
        .itemInputs(
            'kubejs:commonearth'
        )
        .itemOutputs(
            '6x gtceu:sulfur_dust'
        )
        .chancedOutput('kubejs:quartzspeck', 5000, 0)
        .chancedOutput('kubejs:cquartzspeck', 5000, 0)
        .chancedOutput('kubejs:gspeck', 5000, 0)
        .chancedOutput('kubejs:dshard', 5000, 0)
        .duration(100)
        .EUt(15)
        .circuit(1)

    event.recipes.gtceu.centrifuge('commonearth_nickel')
        .itemInputs(
            'kubejs:commonearth',
        )
        .itemOutputs(
            '2x gtceu:nickel_dust'
        )
        .chancedOutput('kubejs:quartzspeck', 5000, 0)
        .chancedOutput('kubejs:cquartzspeck', 5000, 0)
        .chancedOutput('kubejs:gspeck', 5000, 0)
        .chancedOutput('kubejs:dshard', 5000, 0)
        .duration(100)
        .EUt(15)
        .circuit(2)

    event.recipes.gtceu.centrifuge('commonearth_cobaltite')
        .itemInputs(
            'kubejs:commonearth',
        )
        .itemOutputs(
            '2x gtceu:cobaltite_dust'
        )
        .chancedOutput('kubejs:quartzspeck', 5000, 0)
        .chancedOutput('kubejs:cquartzspeck', 5000, 0)
        .chancedOutput('kubejs:gspeck', 5000, 0)
        .chancedOutput('kubejs:dshard', 5000, 0)
        .duration(100)
        .EUt(15)
        .circuit(3)

    event.recipes.gtceu.centrifuge('commonearth_tin')
        .itemInputs(
            'kubejs:commonearth',
        )
        .itemOutputs(
            '4x gtceu:tin_dust'
        )
        .chancedOutput('kubejs:quartzspeck', 5000, 0)
        .chancedOutput('kubejs:cquartzspeck', 5000, 0)
        .chancedOutput('kubejs:gspeck', 5000, 0)
        .chancedOutput('kubejs:dshard', 5000, 0)
        .duration(100)
        .EUt(15)
        .circuit(4)

    event.recipes.gtceu.centrifuge('commonearth_silver')
        .itemInputs(
            'kubejs:commonearth',
        )
        .itemOutputs(
            '2x gtceu:silver_dust'
        )
        .chancedOutput('kubejs:quartzspeck', 5000, 0)
        .chancedOutput('kubejs:cquartzspeck', 5000, 0)
        .chancedOutput('kubejs:gspeck', 5000, 0)
        .chancedOutput('kubejs:dshard', 5000, 0)
        .duration(100)
        .EUt(15)
        .circuit(5)

    event.recipes.gtceu.centrifuge('commonearth_bauxite')
        .itemInputs(
            'kubejs:commonearth',
        )
        .itemOutputs(
            '2x gtceu:bauxite_dust'
        )
        .chancedOutput('kubejs:quartzspeck', 5000, 0)
        .chancedOutput('kubejs:cquartzspeck', 5000, 0)
        .chancedOutput('kubejs:gspeck', 5000, 0)
        .chancedOutput('kubejs:dshard', 5000, 0)
        .duration(100)
        .EUt(15)
        .circuit(6)

    event.recipes.gtceu.centrifuge('commonearth_skydust')
        .itemInputs(
            'kubejs:commonearth',
        )
        .itemOutputs(
            '2x ae2:sky_dust'
        )
        .chancedOutput('kubejs:quartzspeck', 5000, 0)
        .chancedOutput('kubejs:cquartzspeck', 5000, 0)
        .chancedOutput('kubejs:gspeck', 5000, 0)
        .chancedOutput('kubejs:dshard', 5000, 0)
        .duration(100)
        .EUt(15)
        .circuit(7)

    event.recipes.gtceu.centrifuge('commonearth_sulfur2')
        .itemInputs(
            'kubejs:commonearth'
        )
        .itemOutputs(
            '8x gtceu:sulfur_dust'
        )
        .duration(50)
        .EUt(15)
        .circuit(8)

    event.recipes.gtceu.centrifuge('commonearth_nickel2')
        .itemInputs(
            'kubejs:commonearth',
        )
        .itemOutputs(
            '4x gtceu:nickel_dust'
        )
        .duration(50)
        .EUt(15)
        .circuit(9)

    event.recipes.gtceu.centrifuge('commonearth_cobaltite2')
        .itemInputs(
            'kubejs:commonearth',
        )
        .itemOutputs(
            '4x gtceu:cobaltite_dust'
        )
        .duration(50)
        .EUt(15)
        .circuit(10)

    event.recipes.gtceu.centrifuge('commonearth_tin2')
        .itemInputs(
            'kubejs:commonearth',
        )
        .itemOutputs(
            '8x gtceu:tin_dust'
        )
        .duration(50)
        .EUt(15)
        .circuit(11)

    event.recipes.gtceu.centrifuge('commonearth_silver2')
        .itemInputs(
            'kubejs:commonearth',
        )
        .itemOutputs(
            '4x gtceu:silver_dust'
        )
        .duration(50)
        .EUt(15)
        .circuit(12)

    event.recipes.gtceu.centrifuge('commonearth_bauxite2')
        .itemInputs(
            'kubejs:commonearth',
        )
        .itemOutputs(
            '4x gtceu:bauxite_dust'
        )
        .duration(50)
        .EUt(15)
        .circuit(13)

    event.recipes.gtceu.centrifuge('commonearth_skydust2')
        .itemInputs(
            'kubejs:commonearth',
        )
        .itemOutputs(
            '4x ae2:sky_dust'
        )
        .duration(50)
        .EUt(15)
        .circuit(14)

});