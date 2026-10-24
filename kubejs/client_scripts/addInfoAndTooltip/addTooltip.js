ItemEvents.tooltip((event) => {

    /*
    event.addAdvanced(
        [
            'minecraft:oak_log',
            'minecraft:oak_sapling',
            'minecraft:oak_leaves',
            'kubejs:lvalloy',
            'kubejs:mvalloy',
            'kubejs:hvalloy',
            'kubejs:evalloy',
            'kubejs:ivalloy',
            'kubejs:luvalloy',
            'kubejs:animated/zpmalloy',
            'kubejs:animated/uvalloy',
            'kubejs:animated/uhvalloy'

        ],
        (item, advanced, text) => {
            text.add(1, Text.red('WARNING: Not learnable in transmutating table!'));
        }
    );
    */

    event.addAdvanced(
        [
            'kubejs:seniron'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info1").gray())
        }
    );

    event.addAdvanced(
        [
            'kubejs:cc'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info2").gold());
        }
    );

    event.addAdvanced(
        [
            'bloodmagic:speedrune'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info3").red());
            text.add(2, Text.translatable("tooltip.grege.info4").red());
        }
    );

    event.addAdvanced(
        [
            'bloodmagic:speedrune2'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info5").red());
            text.add(2, Text.translatable("tooltip.grege.info6").red());
        }
    );

    event.addAdvanced(
        [
            'bloodmagic:sacrificerune'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info7").red());
            text.add(2, Text.translatable("tooltip.grege.info8").red());
        }
    );

    event.addAdvanced(
        [
            'bloodmagic:sacrificerune2'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info9").red());
            text.add(2, Text.translatable("tooltip.grege.info10").red());
        }
    );

    event.addAdvanced(
        [
            'bloodmagic:selfsacrificerune'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info11").red());
            text.add(2, Text.translatable("tooltip.grege.info12").red());
        }
    );

    event.addAdvanced(
        [
            'bloodmagic:selfsacrificerune2'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info13").red());
            text.add(2, Text.translatable("tooltip.grege.info14").red());
        }
    );

    event.addAdvanced(
        [
            'bloodmagic:dislocationrune'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info15").red());
            text.add(2, Text.translatable("tooltip.grege.info16").red());
        }
    );

    event.addAdvanced(
        [
            'bloodmagic:dislocationrune2'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info17").red());
            text.add(2, Text.translatable("tooltip.grege.info18").red());
        }
    );

    event.addAdvanced(
        [
            'bloodmagic:altarcapacityrune'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info19").red());
            text.add(2, Text.translatable("tooltip.grege.info20").red());
        }
    );

    event.addAdvanced(
        [
            'bloodmagic:altarcapacityrune2'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info21").red());
            text.add(2, Text.translatable("tooltip.grege.info22").red());
        }
    );

    event.addAdvanced(
        [
            'bloodmagic:bettercapacityrune'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info23").red());
            text.add(2, Text.translatable("tooltip.grege.info24").red());
            text.add(3, Text.translatable("tooltip.grege.info25").red());
        }
    );

    event.addAdvanced(
        [
            'bloodmagic:bettercapacityrune2'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info26").red());
            text.add(2, Text.translatable("tooltip.grege.info27").red());
            text.add(3, Text.translatable("tooltip.grege.info28").red());
        }
    );

    event.addAdvanced(
        [
            'bloodmagic:orbcapacityrune'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info29").red());
            text.add(2, Text.translatable("tooltip.grege.info30").red());
        }
    );

    event.addAdvanced(
        [
            'bloodmagic:orbcapacityrune2'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info31").red());
            text.add(2, Text.translatable("tooltip.grege.info32").red());
        }
    );

    event.addAdvanced(
        [
            'bloodmagic:accelerationrune'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info33").red());
            text.add(2, Text.translatable("tooltip.grege.info34").red());
            text.add(3, Text.translatable("tooltip.grege.info35").red());
        }
    );

    event.addAdvanced(
        [
            'bloodmagic:accelerationrune2'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info36").red());
            text.add(2, Text.translatable("tooltip.grege.info37").red());
            text.add(3, Text.translatable("tooltip.grege.info38").red());
        }
    );

    event.addAdvanced(
        [
            'bloodmagic:chargingrune'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info39").red());
            text.add(2, Text.translatable("tooltip.grege.info40").red());
        }
    );

    event.addAdvanced(
        [
            'bloodmagic:chargingrune2'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info41").red());
            text.add(2, Text.translatable("tooltip.grege.info42").red());
        }
    );

    event.addAdvanced(
        [
            'kubejs:vending_machine'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info43").lightPurple());
            text.add(2, Text.translatable("tooltip.grege.info44").lightPurple());
        }
    );

    event.addAdvanced(
        [
            'kubejs:legwepcore'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info45").lightPurple());
        }
    );

    event.addAdvanced(
        [
            'tiab:time_in_a_bottle'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info46").lightPurple());
        }
    );

    event.addAdvanced(
        [
            'kubejs:alkhalaclaw'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info47").gray());
        }
    );

    event.addAdvanced(
        [
            'kubejs:robotarm'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info48").gray());
        }
    );

    event.addAdvanced(
        [
            'kubejs:sensor'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info49").gray());
        }
    );

    event.addAdvanced(
        [
            'kubejs:computation_matrix'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info50").gray());
        }
    );

    event.addAdvanced(
        [
            'gtceu:adrobstat'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info51").gray());
            text.add(2, Text.translatable("tooltip.grege.info52").gray());
        }
        
    );

    event.addAdvanced(
        [
            'kubejs:animated/draconicprocessor'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info53").gray());
            text.add(2, Text.translatable("tooltip.grege.info54").green());
        }
        
    );

    event.addAdvanced(
        [
            'kubejs:euclid/euclid_circuit'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info55").gray());
            text.add(2, Text.translatable("tooltip.grege.info56").darkRed());
        }
    );

    event.addAdvanced(
        [
            'kubejs:euclid/euclid_integrated'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info57").gray());
            text.add(2, Text.translatable("tooltip.grege.info58").darkRed());
        }
    );

    event.addAdvanced(
        [
            'kubejs:fading'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info59").yellow());
        }
    );

    event.addAdvanced(
        [
            'kubejs:euclid/euclid_computer'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info60").gray());
            text.add(2, Text.translatable("tooltip.grege.info61").darkRed());
        }
    );

    event.addAdvanced(
        [
            'kubejs:euclid/euclid_mainframe'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info62").gray())
            text.add(2, Text.translatable("tooltip.grege.info63").darkRed());
        }
    );

    event.addAdvanced(
        [
            'kubejs:deleriancoin'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info64").gray());
        }
    );

    event.addAdvanced(
        [
            'kubejs:scepterofsand'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info65").gray());
        }
    );

    event.addAdvanced(
        [
            'kubejs:draeneiwood'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info66").gray());
            text.add(2, Text.translatable("tooltip.grege.info67").gray());
        }
    );

    event.addAdvanced(
        [
            'kubejs:dewvial'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info68").gray());
        }
    );

    event.addAdvanced(
        [
            'gtceu:voidcrystal'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info69").white());
        }
    );

    event.addAdvanced(
        [
            'gtceu:forgef'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info70").white());
        }
    );

    event.addAdvanced(
        [
            'gtceu:precisionlaserengraver'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info71").gray());
        }
    );

    event.addAdvanced(
        [
            'gtceu:bacteriabreeder'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info72").white());
        }
    );

    event.addAdvanced(
        [
            'gtceu:advancedaeassembler'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info73").gray());
        }
    );

    const factories = [
        {id: 'gtceu:cube_wiremill', tooltip: "tooltip.grege.info74"},
        {id: 'gtceu:cube_extruder', tooltip: "tooltip.grege.info75"},
        {id: 'gtceu:cube_extractor', tooltip: "tooltip.grege.info76"},
        {id: 'gtceu:cube_ore', tooltip: "tooltip.grege.info77"},
        {id: 'gtceu:cube_mixer', tooltip: "tooltip.grege.info78"},
        {id: 'gtceu:cube_assembler', tooltip: "tooltip.grege.info79"},
        {id: 'gtceu:cube_oreprocesser', tooltip: "tooltip.grege.info80"},
        {id: 'gtceu:cube_chemical', tooltip: "tooltip.grege.info81"}
    ]

    factories.forEach(tip => {
        event.addAdvanced(
            [
                tip.id
            ],
            (item, advanced, text) => {
                text.add(1, Text.translatable(tip.tooltip).white());
                text.add(2, Text.translatable("tooltip.grege.info82").white())
            }
    );

    })

    event.addAdvanced(
        [
            'kubejs:dwre'
        ],
        (item, advanced, text) => {
            if(!event.shift){
                text.add(1, Text.translatable("tooltip.grege.info83").white());
                text.add(2, Text.translatable("tooltip.grege.info84").white());
            } else {
                text.add(1, Text.translatable("tooltip.grege.info85").white());
                text.add(2, Text.translatable("tooltip.grege.info86").yellow());
                text.add(3, Text.translatable("tooltip.grege.info87").gray());
                text.add(4, Text.translatable("tooltip.grege.info88").gray());
            }
        }
    );

    event.addAdvanced(
        [
            'gregecore:avaritia_wand_of_puppetry'
        ],
        (item, advanced, text) => {
            if(!event.shift){
                text.add(1, Text.translatable("tooltip.grege.info89").white());
                text.add(2, Text.translatable("tooltip.grege.info90").white());
            } else {
                text.add(1, Text.translatable("tooltip.grege.info91").yellow());
                text.add(2, Text.translatable("tooltip.grege.info92").lightPurple());
                text.add(3, Text.translatable("tooltip.grege.info93").lightPurple());
                text.add(4, Text.translatable("tooltip.grege.info94").lightPurple());
            }
        }
    );

    event.addAdvanced(
        [
            'gregecore:manasteel_coil'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info95").green().append(Text.translatable("tooltip.grege.info96").yellow()));
            text.add(2, Text.translatable("tooltip.grege.info97").green().append(Text.translatable("tooltip.grege.info98").yellow()));
        }
    );

    event.addAdvanced(
        [
            'gregecore:twilight_coil'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info99").green().append(Text.translatable("tooltip.grege.info100").yellow()));
            text.add(2, Text.translatable("tooltip.grege.info101").green().append(Text.translatable("tooltip.grege.info102").yellow()));
        }
    );

    event.addAdvanced(
        [
            'gregecore:desh_coil'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info103").green().append(Text.translatable("tooltip.grege.info104").yellow()));
            text.add(2, Text.translatable("tooltip.grege.info105").green().append(Text.translatable("tooltip.grege.info106").yellow()));
        }
    );

    event.addAdvanced(
        [
            'gregecore:malachite_coil'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info107").green().append(Text.translatable("tooltip.grege.info108").yellow()));
            text.add(2, Text.translatable("tooltip.grege.info109").green().append(Text.translatable("tooltip.grege.info110").yellow()));
            text.add(3, Text.translatable("tooltip.grege.info111").green().append(Text.translatable("tooltip.grege.info112").yellow()));
        }
    );

    event.addAdvanced(
        [
            'gregecore:forgotten_coil'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info113").green().append(Text.translatable("tooltip.grege.info114").yellow()));
            text.add(2, Text.translatable("tooltip.grege.info115").green().append(Text.translatable("tooltip.grege.info116").yellow()));
            text.add(3, Text.translatable("tooltip.grege.info117").green().append(Text.translatable("tooltip.grege.info118").yellow()));
        }
    );

    event.addAdvanced(
        [
            'gregecore:superelement_coil'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info119").green().append(Text.translatable("tooltip.grege.info120").yellow()));
            text.add(2, Text.translatable("tooltip.grege.info121").green().append(Text.translatable("tooltip.grege.info122").yellow()));
            text.add(3, Text.translatable("tooltip.grege.info123").green().append(Text.translatable("tooltip.grege.info124").yellow()));
        }
    );

    event.addAdvanced(
        [
            'gregecore:awakened_draconium_coil'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info125").green().append(Text.translatable("tooltip.grege.info126").yellow()));
        }
    );

    event.addAdvanced(
        [
            'kubejs:vileheart'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info127").gray());
        }
    );

    event.addAdvanced(
        [
            'gregecore:tome2'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info128").gray());
        }
    );

    event.addAdvanced(
        [
            'gregecore:tome1'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info129").gray());
        }
    );

    event.addAdvanced(
        [
            'gregecore:tome4'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info130").gray());
        }
    );

    event.addAdvanced(
        [
            'gregecore:tome5'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info131").gray());
        }
    );

    event.addAdvanced(
        [
            'gregecore:tome3'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info132").gray());
        }
    );

    event.addAdvanced(
        [
            'gtceu:phase_acid_bucket'
        ],
        (item, advanced, text) => {
            text.add(Text.translatable("tooltip.grege.info133").yellow());
        }
    );

    event.addAdvanced(
        [
            'gtceu:giantabs',
            'gtceu:giantreactionchamber',
            'gtceu:largecomponentmassassembler',
            'gtceu:giantesssmelter',
            'gtceu:planetarygassiphon',
            'gtceu:specialoreprocessingplant',
            'gtceu:zerogravmixer',
            'gtceu:industrialfilter',
            'gtceu:laboratory',
            'gtceu:smdforge',
            'gtceu:runecarver'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info134").gray());
        }
    );

    event.addAdvanced(
        [
            'gtceu:alchtransformer',
            'gtceu:voidminer',
            'gregecore:netherdrillrig',
            'gtceu:specializedcrystallizer',
            'gtceu:atmosphericsampler',
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info135").gray());
        }
    );

    event.addAdvanced(
        [
            'gtceu:gasminer',
            'gtceu:irradiator',
            'gtceu:linearaccel',
            'gtceu:metalfurnace',
            'gtceu:transformator',
            'gtceu:voidcrystal',
            'gtceu:giant_squeezer'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info136").gray());
        }
    );

    event.addAdvanced(
        [
            'gtceu:evaporator'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info137").gray());
        }
    );

    event.addAdvanced(
        [
            'gtceu:twilightenergyconcentrator'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info138").gray());
        }
    );

    event.addAdvanced(
        [
            'gtceu:atomicreversator',
            'gtceu:auxillaryfiltrator',
            'gtceu:tectonicdisruptor',
            'gtceu:specialpress',
            'gtceu:oilrig',
            'gtceu:marsbacteriabreeder',
            'gtceu:specmetheat',
            'gtceu:specthermalcentrifuge',
            'gtceu:insaniumtreatmentfacilty',
            'gtceu:aeassembler',
            'gtceu:cleanfarmland',
            'gtceu:bacteriabreeder',
            'gtceu:bigdistillery',
            'gtceu:bigoven',
            'gtceu:bigwitchcauldron',
            'gtceu:czochralskipull',
            'gtceu:sednasampler',
            'gtceu:mobpurgatory',
            'gtceu:oreprocessor',
            'gtceu:tartarustower',
            'gtceu:magicalgarden',
            'gtceu:magicalassembler',
            'gtceu:analyzator'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info139").gray());
        }
    );


    event.addAdvanced(
        [
            'kubejs:magnifying'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info140").gray());
        }
    );

    //Thank you to these artists:

    event.addAdvanced(
        [
            'kubejs:lvalloy',
            'kubejs:mvalloy',
            'kubejs:hvalloy',
            'kubejs:evalloy',
            'kubejs:ivalloy',
            'kubejs:luvalloy',
            'kubejs:animated/zpmalloy',
            'kubejs:animated/uvalloy',
            'kubejs:animated/uhvalloy',
            'kubejs:heatcoil',
            'kubejs:vanaheimingot',
            'kubejs:supingot',
            'kubejs:mushroomingot',
            'kubejs:cursedin',
            'kubejs:bacterialmatteringot',
            'kubejs:machine_casing_block_cyan', 
            'kubejs:machine_casing_block_dark_blue', 
            'kubejs:machine_casing_block_diamond', 
            'kubejs:machine_casing_block_gold', 
            'kubejs:machine_casing_block_green', 
            'kubejs:machine_casing_block_lime', 
            'kubejs:machine_casing_block_magenta', 
            'kubejs:machine_casing_block_orange', 
            'kubejs:machine_casing_block_purple', 
            'kubejs:machine_casing_block_red', 
            'kubejs:machine_casing_tiled_dark_gray', 
            'kubejs:machine_casing_tiled_gray', 
            'kubejs:machine_casing_tiled_green', 
            'kubejs:machine_casing_tiled_light_gray', 
            'kubejs:machine_casing_tiled_lime', 
            'kubejs:machine_casing_tiled_orange', 
            'kubejs:machine_casing_tiled_red', 
            'kubejs:machine_casing_tiled_very_dark_gray', 
            'kubejs:machine_casing_tiled_yellow'

        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info141").gray().append(Text.translatable("tooltip.grege.info142").blue()));
        }
    );

    event.addAdvanced(
        [
            'kubejs:seniron',
            'kubejs:senplate',
            'kubejs:waterone',
            'kubejs:watertwo',
            'kubejs:waterthree',
            'kubejs:waterfour',
            'kubejs:waterfive',
            'kubejs:tornconveyor',
            'gregecore:brass_pellet',
            'gregecore:americium_pellet',
            'gregecore:neutronium_pellet'
        ],
        (item, advanced, text) => {
            text.add(1, Text.translatable("tooltip.grege.info143").gray().append(Text.translatable("tooltip.grege.info144").red()));
        }
    );

    event.addAdvanced(
        [
            'gregecore:manasteel_coil',
            'gregecore:twilight_coil',
            'gregecore:desh_coil',
            'gregecore:malachite_coil',
            'gregecore:forgotten_coil',
            'gregecore:superelement_coil',
            'gregecore:awakened_draconium_coil'
        ],
        (item, advanced, text) => {
            text.add(Text.translatable("tooltip.grege.info145").gray().append(Text.translatable("tooltip.grege.info146").lightPurple()));
        }
    );

});