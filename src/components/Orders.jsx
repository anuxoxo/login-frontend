import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { Redirect } from "react-router-dom";

function Orders() {
    const { user } = useContext(UserContext);

    return (
        <>
            {user.auth ? (
                <div className="orders">
                    <h2>Orders</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, pariatur quod? Atque enim explicabo officia saepe quia quasi eveniet, cum dignissimos repellat quisquam quos distinctio, commodi dolorem! Sit accusantium a consectetur aliquid, voluptatem quis laborum officia quam iure modi perferendis reprehenderit nisi eligendi architecto magnam cumque ea vel, fugiat aliquam. Quidem dolorem distinctio provident tempora cum veritatis? Dolorum minima deserunt reprehenderit distinctio? Eveniet tempora omnis corrupti, numquam eos exercitationem, odit dolores minus iste dignissimos rerum illo, dolorem ab nisi alias consequatur magni perferendis labore? Architecto voluptatem consequuntur temporibus. Quia amet accusantium perspiciatis fuga sunt recusandae eos debitis id quasi obcaecati?</p>
                </div>
            ) : (
                <Redirect to="/login" />
            )}
        </>
    )
}

export default Orders