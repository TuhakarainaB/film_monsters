function Menu({monsters, onSelect})
{
    return(
        <ul>
            {
                monsters.map(
                    (monster, index) => (
                        <li key={index} onClick={() => onSelect(monster)}>
                            {monster.name}
                        </li>
                    )
                )
            }
        </ul>
    );
}

export default Menu;