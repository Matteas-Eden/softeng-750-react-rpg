import { calculateDamage } from '../../../utils/dice';

export default function attackPlayer(attackValue, dice, type) {
    return (dispatch, getState) => {
        const { stats } = getState();
        attackValue = calculateDamage(attackValue);

        const calculatedMonsterDamage =
            attackValue >= Math.max(stats.defence, 0)
                ? calculateDamage(dice)
                : 0;

        dispatch({
            type: 'MONSTER_ABILITY_CHECK',
            payload: {
                attackValue: attackValue,
                check: Math.max(stats.defence, 0),
                against: 'defence',
                entity: type,
            },
        });

        if (calculatedMonsterDamage > 0) {
            // show the attack animation and play sound
            dispatch({
                type: 'MONSTER_ATTACK',
                payload: null,
            });
        }

        dispatch({
            type: 'DAMAGE_TO_PLAYER',
            payload: { damage: calculatedMonsterDamage, entity: type },
        });

        // check if player died
        if (stats.hp - calculatedMonsterDamage <= 0) {
            // play death sound
            dispatch({
                type: 'PLAYER_DIED',
                payload: null,
            });
            // if it did, game over
            dispatch({
                type: 'PAUSE',
                payload: {
                    gameOver: true,
                    pause: true,
                },
            });
        }
    };
}