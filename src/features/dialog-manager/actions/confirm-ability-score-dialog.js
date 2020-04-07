export default function confirmAbilityScoreDialog() {
    return (dispatch, getState) => {
        const {
            constitution,
            charisma,
            dexterity,
            strength,
            wisdom,
            intelligence,
        } = getState().dialog.abilities;

        dispatch({
            type: 'SET_ABILITY_SCORES',
            payload: {
                abilities: {
                    charisma: charisma,
                    constitution: constitution,
                    dexterity: dexterity,
                    strength: strength,
                    wisdom: wisdom,
                    intelligence: intelligence,
                },
            },
        });

        if (getState().dialog.fromLevelUp) {
            dispatch({
                type: 'PAUSE',
                payload: {
                    pause: false,
                    fromLevelUp: false,
                },
            });
        } else {
            dispatch({
                type: 'PAUSE',
                payload: {
                    pause: true,
                    gameInstructions: true,
                },
            });
        }
    };
}