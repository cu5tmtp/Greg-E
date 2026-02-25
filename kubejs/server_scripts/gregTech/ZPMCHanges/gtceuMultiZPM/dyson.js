ServerEvents.recipes((event) => {
    
    event.shaped(
        Item.of('gregecore:dysonswarmlauncher', 1),
        [
            ' A ',
            'DCD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/zpm',
            C: 'gregecore:solar_sail',
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
            C: 'solarflux:mirror',
            D: 'gtceu:zpm_electric_pump',
            E: 'gtceu:zpm_machine_hull'
        }
    )

    event.shaped(
        Item.of('gregecore:solar_sail', 1),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'solarflux:mirror',
            B: 'minecraft:lightning_rod'
        }
    )

    event.recipes.gtceu
        .launch_sails('launchingsailsyaaay')
        .itemInputs(
            'gregecore:solar_sail'
        )
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(5)

    event.recipes.gtceu
        .get_solar_sail_energy('getthatexpensiveenergyyay')
        .itemInputs(
            'gregecore:solar_activator'
        )
        .duration(1200)
        .EUt(-5000000)
});