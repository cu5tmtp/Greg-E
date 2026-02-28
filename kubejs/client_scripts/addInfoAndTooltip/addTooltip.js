ItemEvents.tooltip((event) => {

    event.addAdvanced(
        [
            'minecraft:oak_log',
            'minecraft:oak_sapling',
            'minecraft:apple',
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

    event.addAdvanced(
        [
            'kubejs:seniron'
        ],
        (item, advanced, text) => {
            text.add(1, Text.gray('It formed on its own...'));
        }
    );

    event.addAdvanced(
        [
            'kubejs:dewvial'
        ],
        (item, advanced, text) => {
            text.add(1, Text.gray('This could be useful in a pixelated dungeon...'));
        }
    );

    event.addAdvanced(
        [
            'gtceu:voidcrystal'
        ],
        (item, advanced, text) => {
            text.add(1, Text.white('Machine modes: Void Crystal, Void Crystal Incubator'));
        }
    );

    event.addAdvanced(
        [
            'gtceu:forgef'
        ],
        (item, advanced, text) => {
            text.add(1, Text.white('Machine modes: Dwarven Anvil, Dwarven Forge'));
        }
    );

        event.addAdvanced(
        [
            'gtceu:bacteriabreeder'
        ],
        (item, advanced, text) => {
            text.add(1, Text.white('Machine modes: Bacteria Breeding, Bacteria Multiplying'));
        }
    );

    event.addAdvanced(
        [
            'kubejs:dwre'
        ],
        (item, advanced, text) => {
            if(!event.shift){
                text.add(1, Text.white('Right click to open!'));
                text.add(2, Text.white('Hold SHIFT for more info.'));
            } else {
                text.add(1, Text.white('Chances:'));
                text.add(2, Text.yellow('10% Curious Pottery Shard'));
                text.add(3, Text.gray('30% Clay Block'));
                text.add(4, Text.gray('60% Stick'));
            }
        }
    );

    event.addAdvanced(
        [
            'gregecore:manasteel_coil'
        ],
        (item, advanced, text) => {
            text.add(1, Text.green('Coil heat capacity: ').append(Text.yellow('1800K')));
            text.add(2, Text.green('Coil recipe time reduction: ').append(Text.yellow('20%')));
        }
    );

    event.addAdvanced(
        [
            'gregecore:twilight_coil'
        ],
        (item, advanced, text) => {
            text.add(1, Text.green('Coil heat capacity: ').append(Text.yellow('3600K')));
            text.add(2, Text.green('Coil recipe time reduction: ').append(Text.yellow('40%')));
        }
    );

    event.addAdvanced(
        [
            'gregecore:desh_coil'
        ],
        (item, advanced, text) => {
            text.add(1, Text.green('Coil heat capacity: ').append(Text.yellow('5400K')));
            text.add(2, Text.green('Coil recipe time reduction: ').append(Text.yellow('60%')));
        }
    );

    event.addAdvanced(
        [
            'gregecore:malachite_coil'
        ],
        (item, advanced, text) => {
            text.add(1, Text.green('Coil heat capacity: ').append(Text.yellow('7400K')));
            text.add(2, Text.green('Coil recipe time reduction: ').append(Text.yellow('20%')));
            text.add(3, Text.green('Coil parallels: ').append(Text.yellow('2')));
        }
    );

    event.addAdvanced(
        [
            'gregecore:forgotten_coil'
        ],
        (item, advanced, text) => {
            text.add(1, Text.green('Coil heat capacity: ').append(Text.yellow('9200K')));
            text.add(2, Text.green('Coil recipe time reduction: ').append(Text.yellow('40%')));
            text.add(3, Text.green('Coil parallels: ').append(Text.yellow('4')));
        }
    );

    event.addAdvanced(
        [
            'gregecore:superelement_coil'
        ],
        (item, advanced, text) => {
            text.add(1, Text.green('Coil heat capacity: ').append(Text.yellow('11000K')));
            text.add(2, Text.green('Coil recipe time reduction: ').append(Text.yellow('60%')));
            text.add(3, Text.green('Coil parallels: ').append(Text.yellow('8')));
        }
    );
    

});