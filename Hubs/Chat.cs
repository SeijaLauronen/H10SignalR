using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.SignalR;//SSL
//https://docs.microsoft.com/en-us/aspnet/core/tutorials/signalr?view=aspnetcore-3.1&tabs=visual-studio

//TODO: Models-kansio? videolla 2 tunnin kohdala

namespace Harjoitus10_SignalRChat.Hubs
{
    public class Chat:Hub //SSL Added Hub
    {
        //private Chat chatti = new Chat(); //ei tätä nyt tarvita
        public async Task SendMessage(string user, string message)
        {
            var temppi = user; //Kunhan tähän vaan laittoi jotain, niin alkoi toimia, muuten chat vaan vilahti ja sulkeutui!! Missä vika?
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }
    }
}
