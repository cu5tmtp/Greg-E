ServerEvents.recipes((event) => {
    
    event.shaped(
        Item.of('gregecore:dysonswarmlauncher', 1),
        [
            ' A ',
            'DBD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/zpm',
            B: 'grege:solar_sail_case',
            C: 'grege:solar_sail',
            D: 'gtceu:zpm_electric_pump',
            E: 'gtceu:zpm_machine_hull'
        }
    )

        event.shaped(
        Item.of('gregecore:dysonswarmenergycollector', 1),
        [
            ' A ',
            'DCD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/zpm',
            C: 'grege:solar_sail_ca',
            D: 'gtceu:zpm_electric_pump',
            E: 'gtceu:zpm_machine_hull'
        }
    )

    event.recipes.gtceu
        .launch_sails('launchingsailsyaaay')
        .itemInputs(
            'gregecore:solar_sail'
        )
        .itemOutputs(
            'gregecore:solar_sail_case'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(5)

    event.recipes.gtceu
        .get_solar_sail_energy('getthatexpensiveenergyyay')
        .itemInputs(
            'gregecore:solar_activator'
        )
        .itemOutputs(
            'kubejs:uncomp'
        )
        .duration(1200)
        .EUt(-5000000)
});