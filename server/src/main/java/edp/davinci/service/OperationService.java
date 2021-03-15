package edp.davinci.service;


import edp.davinci.model.User;


public interface OperationService {
    int selVisitNumByName(User user);
    int selDownNumByName(User user);
    int selLoginNumByName(User user);
}
