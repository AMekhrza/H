type UserResponse = {
    id: number,
    name: string,
    registrationDate: string,
}

type AuthResponse = {
    id: number;
    avatar: string;
    name: string;
    login: string;
    user_token: string;
}

type SomeOtherResponse = {
    field1: string;
    field2: string;
    field3: string;
}

type UserReponseAfterApiRefactoring = {
    data: {
        id: number,
        name: string,
        registrationDate: string,
    },
    meta: MetaTrackMessage | LoadMetaMessage,
}

type MetaTrackMessage = {
    trackId: string,
    trackerUrl: string,
}

type LoadMetaMessage = {
    currentNodeId: string,
    currentNodeLoad: number,
}

type ApiResponse<T> = {
    data: T,
    meta: MetaTrackMessage | LoadMetaMessage,
}

class SomeExternalApi {
    public static getUsers(): ApiResponse<UserResponse[]> {
        return {
            data: [
                { id: 47, name: "Stanley", registrationDate: "2020-07-12 08:11:45" },
                { id: 48, name: "Donald", registrationDate: "2021-02-15 10:56:51" },
                { id: 49, name: "Kate", registrationDate: "2020-08-30 14:17:23" },
                { 
                    id : 50, 
                    name: "Jeffrey" , 
                    registrationDate : "2021-07-22 12:22:50"
                 }, 
                { 
                    id : 51, 
                     name : "Sue" , 
                    ​​registrationDate : "2021-10-23 17:50:53"
                 }, 
                { 
                    id : 52, 
                    name : "Mabelle" , 
                    registrationDate :"2021-11-30 05:30:07"},
    
          
            ], 
            meta: {
                trackId: "someTrackId",
                trackerUrl: "someTrackerUrl",
            }
        };
    }

    public static auth(): ApiResponse<AuthResponse> {
        return {
            data: {
                id: 124,
                avatar: "<http://llss.qiniudn.com/d234b75b6a7dfeda793b7da04a7c080dd.png>",
                name: "Johanna",
                login: "Johanna206",
                user_token: "eYEuVgUlDvRXgHR"
            },
            meta: {
                trackId: "someTrackId",
                trackerUrl: "someTrackerUrl",
            }
        };
    }

    public static getSomeOther(): ApiResponse<SomeOtherResponse[]> {
        return {
            data: [
                { field1: "7pfE0oQFUZJg", field2: "rS9bzwuy8qb1U", field3: "2vLYGgE" },
                { field1: "vS", field2: "Dl", field3: "6JB28Del" },
                { field1: "WVA", field2: "9EAQk5w1sk0N8sm7j2d", field3: "BFTkEIrJFzSCfo" }
            ],
            meta: {
                trackId: "someTrackId",
                trackerUrl: "someTrackerUrl",
            }
        };
    }
}

// Пример использования
console.log("Users:", SomeExternalApi.getUsers().data);
console.log("Auth:", SomeExternalApi.auth().data);
console.log("Some Other:", SomeExternalApi.getSomeOther().data);
  