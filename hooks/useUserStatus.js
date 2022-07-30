import { useState, useEffect } from "react";

const useUserStatus = (initialValue) => {
  const [isAdmin, setIsAdmin] = useState(initialValue);

  useEffect(() => {
    const uid = localStorage.getItem("azhar_blog_visitor_uid");
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
