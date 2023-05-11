import { useState, useEffect } from "react";

const useUserStatus = (initialValue) => {
  const [isAdmin, setIsAdmin] = useState(initialValue);

  useEffect(() => {
    const uid = JSON.parse(
      localStorage.getItem("azhar_blog_visitor_user_obj")
    ).uid;
    const adminUid = process.env.NEXT_PUBLIC_ADMIN_SECRET_UID;
    if (uid) {
      if (uid === adminUid) {
        setIsAdmin(true);
      }
    }
  }, []);

  return isAdmin;
};

export default useUserStatus;
